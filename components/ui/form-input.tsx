"use client";

import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

type ValidationRule = {
  type: "required" | "email" | "minLength" | "maxLength" | "pattern" | "custom";
  value?: number | string | RegExp;
  message: string;
  validator?: (value: string) => boolean;
};

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "password" | "textarea" | "number";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  validationRules?: ValidationRule[];
  disabled?: boolean;
  className?: string;
  autoComplete?: string;
  rows?: number;
}

function validateInput(value: string, rules: ValidationRule[]): string | null {
  for (const rule of rules) {
    switch (rule.type) {
      case "required":
        if (!value.trim()) return rule.message;
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) return rule.message;
        break;
      case "minLength":
        if (value && value.length < (rule.value as number)) return rule.message;
        break;
      case "maxLength":
        if (value && value.length > (rule.value as number)) return rule.message;
        break;
      case "pattern":
        const regex = rule.value instanceof RegExp ? rule.value : new RegExp(rule.value as string);
        if (value && !regex.test(value)) return rule.message;
        break;
      case "custom":
        if (rule.validator && !rule.validator(value)) return rule.message;
        break;
    }
  }
  return null;
}

export function FormInput({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  validationRules = [],
  disabled = false,
  className,
  autoComplete,
  rows = 4,
}: FormInputProps) {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validate = useCallback(() => {
    if (validationRules.length > 0) {
      const validationError = validateInput(value, validationRules);
      setError(validationError);
      return validationError === null;
    }
    return true;
  }, [value, validationRules]);

  useEffect(() => {
    if (touched) {
      validate();
    }
  }, [value, touched, validate]);

  const handleBlur = () => {
    setTouched(true);
    validate();
    onBlur?.();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  const inputClasses = cn(
    "w-full px-4 py-3 bg-carbon border rounded-lg text-porcelain placeholder:text-hint/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50",
    error && touched ? "border-red-500/60 focus:ring-red-500/30 focus:border-red-500/60" : "border-white/10 hover:border-white/20",
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const InputElement = type === "textarea" ? "textarea" : "input";

  return (
    <div className="space-y-1.5">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-porcelain"
      >
        {label}
        {validationRules.some(r => r.type === "required") && (
          <span className="text-red-400 ml-1" aria-hidden="true">*</span>
        )}
      </label>
      
      <InputElement
        id={id}
        name={name}
        type={type !== "textarea" ? type : undefined}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        autoComplete={autoComplete}
        rows={type === "textarea" ? rows : undefined}
        className={inputClasses}
        aria-invalid={error && touched ? "true" : "false"}
        aria-describedby={error && touched ? `${id}-error` : undefined}
      />
      
      {error && touched && (
        <p 
          id={`${id}-error`}
          className="text-xs text-red-400 mt-1 flex items-center gap-1"
          role="alert"
        >
          <svg 
            className="w-3.5 h-3.5 shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

interface FormSelectProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  validationRules?: ValidationRule[];
  disabled?: boolean;
  className?: string;
}

export function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  validationRules = [],
  disabled = false,
  className,
}: FormSelectProps) {
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  const validate = useCallback(() => {
    if (validationRules.length > 0) {
      const validationError = validateInput(value, validationRules);
      setError(validationError);
      return validationError === null;
    }
    return true;
  }, [value, validationRules]);

  useEffect(() => {
    if (touched) {
      validate();
    }
  }, [value, touched, validate]);

  const handleBlur = () => {
    setTouched(true);
    validate();
  };

  const selectClasses = cn(
    "w-full px-4 py-3 bg-carbon border rounded-lg text-porcelain transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 appearance-none cursor-pointer",
    error && touched ? "border-red-500/60 focus:ring-red-500/30 focus:border-red-500/60" : "border-white/10 hover:border-white/20",
    disabled && "opacity-50 cursor-not-allowed",
    !value && "text-hint/50",
    className
  );

  return (
    <div className="space-y-1.5">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium text-porcelain"
      >
        {label}
        {validationRules.some(r => r.type === "required") && (
          <span className="text-red-400 ml-1" aria-hidden="true">*</span>
        )}
      </label>
      
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          disabled={disabled}
          className={selectClasses}
          aria-invalid={error && touched ? "true" : "false"}
          aria-describedby={error && touched ? `${id}-error` : undefined}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        <svg 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-hint pointer-events-none" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {error && touched && (
        <p 
          id={`${id}-error`}
          className="text-xs text-red-400 mt-1 flex items-center gap-1"
          role="alert"
        >
          <svg 
            className="w-3.5 h-3.5 shrink-0" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
              clipRule="evenodd" 
            />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

interface FormErrors {
  [key: string]: string | null;
}

export function useForm<T extends Record<string, string>>(initialState: T) {
  const [values, setValues] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const setValue = (name: keyof T, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const setError = (name: keyof T, error: string | null) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  const validateAll = (validationSchemas: { [K in keyof T]?: ValidationRule[] }): boolean => {
    let valid = true;
    const newErrors: FormErrors = {};

    for (const [key, rules] of Object.entries(validationSchemas)) {
      if (rules) {
        const error = validateInput(values[key as keyof T], rules as ValidationRule[]);
        newErrors[key] = error;
        if (error) valid = false;
      }
    }

    setErrors(newErrors);
    setIsValid(valid);
    return valid;
  };

  return {
    values,
    errors,
    isSubmitting,
    isValid,
    setValue,
    setError,
    setIsSubmitting,
    reset,
    validateAll,
  };
}
