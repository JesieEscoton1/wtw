import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const jobOptions = [
  'HR Manager',
  'Software Engineer',
  'Data Analyst',
  'Compensation Specialist',
  'Recruiter',
];

const compensationData: Record<string, { years: number[]; salary: number[] }> = {
  'HR Manager': {
    years: [1, 3, 5, 7, 10],
    salary: [40000, 50000, 65000, 80000, 95000],
  },
  'Software Engineer': {
    years: [1, 3, 5, 7, 10],
    salary: [50000, 70000, 90000, 110000, 130000],
  },
  'Data Analyst': {
    years: [1, 3, 5, 7, 10],
    salary: [42000, 55000, 70000, 85000, 100000],
  },
  'Compensation Specialist': {
    years: [1, 3, 5, 7, 10],
    salary: [45000, 60000, 75000, 90000, 105000],
  },
  'Recruiter': {
    years: [1, 3, 5, 7, 10],
    salary: [38000, 48000, 60000, 72000, 85000],
  },
};

const gradientFill = (ctx: CanvasRenderingContext2D, area: any) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  gradient.addColorStop(0, 'rgba(0,170,255,0.08)');
  gradient.addColorStop(1, 'rgba(224,74,155,0.18)');
  return gradient;
};

const JobCompensationChart: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState(jobOptions[0]);
  const [chartRef, setChartRef] = useState<any>(null);

  // Chart data with gradient fill
  const data = {
    labels: compensationData[selectedJob].years.map((y) => `${y} yrs`),
    datasets: [
      {
        label: 'Compensation (USD)',
        data: compensationData[selectedJob].salary,
        borderColor: '#00aaff',
        backgroundColor: chartRef ? gradientFill(chartRef.ctx, chartRef.chartArea) : 'rgba(0,170,255,0.08)',
        pointBackgroundColor: '#E04A9B',
        pointBorderColor: '#fff',
        pointRadius: 7,
        pointHoverRadius: 10,
        pointBorderWidth: 3,
        tension: 0.4,
        fill: true,
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        shadowBlur: 8,
        shadowColor: 'rgba(0,0,0,0.08)',
      },
    ],
  };

  const options = {
    responsive: true,
    animation: {
      duration: 900,
      easing: 'easeOutQuart' as const,
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#00aaff',
        bodyColor: '#222',
        borderColor: '#00aaff',
        borderWidth: 1,
        boxPadding: 6,
        callbacks: {
          label: (context: any) => ` $${context.parsed.y.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0,170,255,0.08)',
          borderDash: [4, 4],
        },
        ticks: {
          callback: (tickValue: string | number) => {
            if (typeof tickValue === 'number') {
              return `$${tickValue.toLocaleString()}`;
            }
            return tickValue;
          },
          color: '#00aaff',
          font: { weight: 'bold' as const },
        },
        title: {
          display: true,
          text: 'Compensation (USD)',
          color: '#00aaff',
          font: { weight: 'bold' as const },
        },
      },
      x: {
        grid: {
          color: 'rgba(224,74,155,0.08)',
        },
        ticks: {
          color: '#E04A9B',
          font: { weight: 'bold' as const },
        },
        title: {
          display: true,
          text: 'Years of Experience',
          color: '#E04A9B',
          font: { weight: 'bold' as const },
        },
      },
    },
  };

  return (
    <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, borderRadius: 4, background: 'linear-gradient(135deg, #f7fafd 80%, #e3f4fb 100%)', mb: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'flex-start' },
          gap: { xs: 3, md: 6 },
          mb: 2,
        }}
      >
        <Box sx={{ flex: { xs: 'unset', md: '0 0 280px' }, minWidth: 180, maxWidth: 320 }}>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="job-select-label" sx={{ background: '#fff', px: 0.5, borderRadius: 2 }}>Job Position</InputLabel>
            <Select
              labelId="job-select-label"
              value={selectedJob}
              label="Job Position"
              onChange={(e) => setSelectedJob(e.target.value)}
              IconComponent={ExpandMoreIcon}
              sx={{
                borderRadius: 3,
                background: '#fff',
                fontWeight: 700,
                fontSize: '1.1rem',
                boxShadow: '0 2px 8px rgba(0,170,255,0.07)',
                '& .MuiSelect-select': { py: 1.5, px: 2 },
              }}
            >
              {jobOptions.map((job) => (
                <MenuItem key={job} value={job} sx={{ fontWeight: 600, fontSize: '1.05rem' }}>{job}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ flex: 1, minWidth: 0, maxWidth: 700 }}>
          <Line
            data={data}
            options={options}
            ref={(ref: any) => {
              if (ref && ref.chartInstance) setChartRef(ref.chartInstance);
              else if (ref && ref.chart) setChartRef(ref.chart);
            }}
          />
        </Box>
      </Box>
      <Typography variant="caption" sx={{ color: '#888', mt: 1, display: 'block', textAlign: 'center' }}>
        * Compensation data is for illustration purposes only.
      </Typography>
    </Paper>
  );
};

export default JobCompensationChart; 