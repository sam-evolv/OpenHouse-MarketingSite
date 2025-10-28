import { Container } from "@/components/ui/container";
import content from "@/i18n/en.json";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-carbon">
      <Container>
        <h1 className="text-display-md font-bold text-porcelain mb-6 text-center">
          Solutions for every stakeholder
        </h1>
        <p className="text-body-lg text-hint mb-16 text-center max-w-3xl mx-auto">
          {content.audience.title}
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-md">{content.audience.developers.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-hint">{content.audience.developers.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-heading-md">{content.audience.agents.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-hint">{content.audience.agents.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-heading-md">{content.audience.residents.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-hint">{content.audience.residents.description}</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}
