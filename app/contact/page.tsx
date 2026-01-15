import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-display-md font-bold text-porcelain mb-6">
            Book your demo
          </h1>
          <p className="text-body-lg text-hint mb-12">
            See OpenHouse Ai in action. Schedule a personalized demo with our team.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <CardTitle>Schedule a call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-hint mb-6">
                  Book a 30-minute demo tailored to your development's needs.
                </p>
                <Button className="w-full">Schedule now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <CardTitle>Email us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-hint mb-6">
                  Have questions? Get in touch with our team directly.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:hello@openhouse.ai">hello@openhouse.ai</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
