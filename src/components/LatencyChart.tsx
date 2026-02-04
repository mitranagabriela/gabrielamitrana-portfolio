import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

// Sample latency data simulating agent execution performance
const latencyData = [
  { time: "9:00", latency: 0.8, label: "Mon 9:00 AM" },
  { time: "10:00", latency: 1.2, label: "Mon 10:00 AM" },
  { time: "11:00", latency: 0.9, label: "Mon 11:00 AM" },
  { time: "12:00", latency: 2.1, label: "Mon 12:00 PM" },
  { time: "13:00", latency: 3.5, label: "Mon 1:00 PM" },
  { time: "14:00", latency: 2.8, label: "Mon 2:00 PM" },
  { time: "15:00", latency: 1.5, label: "Mon 3:00 PM" },
  { time: "16:00", latency: 0.7, label: "Mon 4:00 PM" },
  { time: "17:00", latency: 1.1, label: "Mon 5:00 PM" },
  { time: "18:00", latency: 4.2, label: "Mon 6:00 PM" },
  { time: "19:00", latency: 3.1, label: "Mon 7:00 PM" },
  { time: "20:00", latency: 1.8, label: "Mon 8:00 PM" },
];

// Threshold for good vs bad latency (in seconds)
const LATENCY_THRESHOLD = 2.0;

interface TooltipPayload {
  payload: {
    latency: number;
    label: string;
  };
}

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const isGood = data.latency <= LATENCY_THRESHOLD;
    
    return (
      <div className="bg-background border border-border rounded-lg shadow-xl px-4 py-3 min-w-[160px]">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">Latency</span>
          <span 
            className="text-lg font-semibold"
            style={{ color: isGood ? "#22c55e" : "#f97316" }}
          >
            {data.latency.toFixed(2)}s
          </span>
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {data.label}
        </div>
      </div>
    );
  }
  return null;
};

export const LatencyChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Calculate the gradient stops based on latency values
  const gradientStops = useMemo(() => {
    const maxLatency = Math.max(...latencyData.map(d => d.latency));
    return latencyData.map((d, index) => ({
      offset: `${(index / (latencyData.length - 1)) * 100}%`,
      color: d.latency <= LATENCY_THRESHOLD ? "#22c55e" : "#f97316",
    }));
  }, []);

  const currentData = activeIndex !== null ? latencyData[activeIndex] : latencyData[latencyData.length - 1];
  const isCurrentGood = currentData.latency <= LATENCY_THRESHOLD;

  return (
    <div className="w-full bg-background rounded-xl border border-border p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Avg Latency</span>
            <span 
              className="text-3xl font-bold"
              style={{ color: isCurrentGood ? "#22c55e" : "#f97316" }}
            >
              {currentData.latency.toFixed(2)}s
            </span>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            {currentData.label}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#22c55e" }} />
            <span>Good (&lt;{LATENCY_THRESHOLD}s)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#f97316" }} />
            <span>Slow (≥{LATENCY_THRESHOLD}s)</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={latencyData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            onMouseMove={(e) => {
              if (e.activeTooltipIndex !== undefined) {
                setActiveIndex(e.activeTooltipIndex);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <defs>
              {/* Horizontal gradient for line stroke */}
              <linearGradient id="latencyStrokeGradient" x1="0" y1="0" x2="1" y2="0">
                {gradientStops.map((stop, index) => (
                  <stop
                    key={index}
                    offset={stop.offset}
                    stopColor={stop.color}
                    stopOpacity={1}
                  />
                ))}
              </linearGradient>
              {/* Matching fill gradients for each color */}
              <linearGradient id="greenFillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="orangeFillGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#f97316" stopOpacity={0.02} />
              </linearGradient>
              {/* Combined horizontal + vertical gradient for fill area */}
              <linearGradient id="latencyFillGradient" x1="0" y1="0" x2="1" y2="0">
                {gradientStops.map((stop, index) => (
                  <stop
                    key={index}
                    offset={stop.offset}
                    stopColor={stop.color}
                    stopOpacity={0.25}
                  />
                ))}
              </linearGradient>
            </defs>
            
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickFormatter={(value) => `${value}s`}
              domain={[0, 'auto']}
            />
            
            <ReferenceLine 
              y={LATENCY_THRESHOLD} 
              stroke="hsl(var(--border))"
              strokeDasharray="4 4"
            />
            
            <Tooltip 
              content={<CustomTooltip />}
              cursor={{
                stroke: "hsl(var(--border))",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
            />
            
            <Area
              type="monotone"
              dataKey="latency"
              stroke="url(#latencyStrokeGradient)"
              strokeWidth={2.5}
              fill="url(#latencyFillGradient)"
              dot={(props) => {
                const { cx, cy, payload, index } = props;
                const isGood = payload.latency <= LATENCY_THRESHOLD;
                const isActive = index === activeIndex;
                
                return (
                  <circle
                    key={index}
                    cx={cx}
                    cy={cy}
                    r={isActive ? 6 : 4}
                    fill={isGood ? "#22c55e" : "#f97316"}
                    stroke="hsl(var(--background))"
                    strokeWidth={2}
                    style={{
                      transition: "r 0.15s ease-out",
                      filter: isActive ? "drop-shadow(0 0 6px rgba(0,0,0,0.2))" : "none",
                    }}
                  />
                );
              }}
              activeDot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
