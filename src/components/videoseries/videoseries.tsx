'use client';``
import React, { useState, useEffect } from 'react';
import { Separator } from '../ui/separator';
import VideoList from './video-list';

interface Course {
  title: string;
  subtitle: string;
  courseHours: number;
  originalAmount: number;
  amount: number;
  series: {
    order: {
      seq: number;
    };
  };
}

const VideoSeries = () => {
  const [series, setSeries] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3');
        const data = await response.json();
        setSeries(data.courses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='px-6 mt-2'>
      <h1 className='text-xl font-semibold py-2'>
        Video Series ({series.length})
      </h1>
      <Separator my-2 />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {series.map((course, index) => (
          <VideoList key={index} title={course.title} description={course.subtitle} duration={`${course.courseHours} h`} originalContribution={course.originalAmount} newContribution={course.amount} bhag={course.series.order.seq}  />
        ))}
      </div>
    </div>
  );
};

export default VideoSeries;