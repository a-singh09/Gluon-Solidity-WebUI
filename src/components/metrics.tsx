import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Metric {
  label: string;
  value: string;
}

interface MetricsProps {
  metrics: Metric[];
}

const Metrics: React.FC<MetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-1">
          <CardHeader>
            <CardTitle className="text-lg font-bold">{metric.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm">
              {metric.value.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Metrics;
