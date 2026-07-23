"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { heroSequenceDurationMs, heroSequenceStates, getHeroStateIndexAtTime } from "./hero-sequence";

function shouldAvoidAutoplay() {
  if (typeof window === "undefined") return true;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  return reducedMotion || Boolean(connection?.saveData);
}

export function HeroSequencePlayer() {
  const rootRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const startedAtRef = useRef<number | null>(null);
  const elapsedRef = useRef(0);
  const visibleRef = useRef(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);

  const stopFrame = useCallback(() => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = null;
  }, []);

  const pause = useCallback(() => {
    stopFrame();
    startedAtRef.current = null;
    setPlaying(false);
  }, [stopFrame]);

  const tick = useCallback(
    (now: number) => {
      if (!visibleRef.current || document.hidden) {
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      if (startedAtRef.current === null) startedAtRef.current = now - elapsedRef.current;
      const elapsed = now - startedAtRef.current;
      elapsedRef.current = elapsed;
      setActiveIndex(getHeroStateIndexAtTime(elapsed));

      if (elapsed >= heroSequenceDurationMs) {
        elapsedRef.current = heroSequenceDurationMs;
        startedAtRef.current = null;
        frameRef.current = null;
        setPlaying(false);
        return;
      }

      frameRef.current = requestAnimationFrame(tick);
    },
    [],
  );

  const play = useCallback(() => {
    if (!autoplayAllowed) return;
    if (elapsedRef.current >= heroSequenceDurationMs) elapsedRef.current = 0;
    startedAtRef.current = null;
    setPlaying(true);
    stopFrame();
    frameRef.current = requestAnimationFrame(tick);
  }, [autoplayAllowed, stopFrame, tick]);

  const selectState = useCallback(
    (index: number) => {
      pause();
      const nextState = heroSequenceStates[index];
      elapsedRef.current = nextState.startAtMs;
      setActiveIndex(index);
    },
    [pause],
  );

  const replay = useCallback(() => {
    elapsedRef.current = 0;
    setActiveIndex(0);
    if (autoplayAllowed) play();
  }, [autoplayAllowed, play]);

  useEffect(() => {
    const allowed = !shouldAvoidAutoplay();
    setAutoplayAllowed(allowed);
    if (allowed) {
      setPlaying(true);
      frameRef.current = requestAnimationFrame(tick);
    }

    return stopFrame;
  }, [stopFrame, tick]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
        if (!entry.isIntersecting) pause();
      },
      { threshold: 0.2 },
    );

    const handleVisibility = () => {
      if (document.hidden) pause();
    };

    observer.observe(root);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [pause]);

  const state = heroSequenceStates[activeIndex];

  return (
    <div ref={rootRef} className="absolute inset-0 z-20" data-sequence-state={state.id}>
      <div className="pointer-events-none absolute inset-x-4 bottom-20 sm:inset-x-6 sm:bottom-24">
        <div className="ml-auto max-w-[19rem] rounded-2xl border border-white/10 bg-black/88 p-4 shadow-2xl backdrop-blur-md sm:p-5" aria-live="polite">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-gold">
            {String(activeIndex + 1).padStart(2, "0")} / {String(heroSequenceStates.length).padStart(2, "0")}
          </p>
          <p className="mt-2 text-base font-semibold text-white">{state.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-porcelain/62">{state.description}</p>
        </div>
      </div>

      {state.id === "question" ? (
        <div className="pointer-events-none absolute left-5 top-[37%] max-w-[15rem] rounded-2xl rounded-bl-md bg-gold px-4 py-3 text-sm font-medium text-carbon shadow-[0_18px_60px_rgba(212,175,55,0.22)] sm:left-auto sm:right-8">
          What size is my living room?
        </div>
      ) : null}

      {state.id === "answer" ? (
        <div className="pointer-events-none absolute left-5 right-5 top-[30%] rounded-2xl border border-gold/30 bg-[#11110f]/95 p-4 shadow-2xl sm:left-auto sm:right-8 sm:w-[19rem]">
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-gold">Example home answer</p>
          <p className="mt-2 text-sm leading-relaxed text-porcelain/85">The living room is shown as 28.5 m² in the supplied Ground Floor plan.</p>
          <p className="mt-3 border-t border-white/10 pt-3 text-xs text-porcelain/50">Source · Ground Floor plan, A3</p>
        </div>
      ) : null}

      {state.id === "developer" ? (
        <div className="pointer-events-none absolute inset-x-5 top-[25%] grid gap-2 sm:left-auto sm:right-8 sm:w-[20rem]">
          {["Questions that repeat", "Low-confidence answers", "Information still missing"].map((signal, index) => (
            <div key={signal} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/88 px-4 py-3 text-xs text-porcelain/75 backdrop-blur-md">
              <span>{signal}</span>
              <span className={index === 2 ? "text-amber-300" : "text-gold"}>Visible</span>
            </div>
          ))}
        </div>
      ) : null}

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 sm:inset-x-6 sm:bottom-6">
        <div className="flex gap-1.5" role="tablist" aria-label="Living home sequence">
          {heroSequenceStates.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={item.accessibleLabel}
              onClick={() => selectState(index)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${index === activeIndex ? "w-8 bg-gold" : "w-3 bg-white/25 hover:bg-white/45"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/75 p-1 backdrop-blur-md">
          <button
            type="button"
            onClick={playing ? pause : play}
            disabled={!autoplayAllowed}
            className="flex h-8 w-8 items-center justify-center rounded-full text-porcelain/70 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            aria-label={playing ? "Pause living home sequence" : "Play living home sequence"}
          >
            {playing ? <Pause className="h-3.5 w-3.5" aria-hidden="true" /> : <Play className="h-3.5 w-3.5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={replay}
            className="flex h-8 w-8 items-center justify-center rounded-full text-porcelain/70 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Replay living home sequence"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
