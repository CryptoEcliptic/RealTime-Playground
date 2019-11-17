using SignalRDemo.DTOs;
using System;

namespace SignalRDemo.Services
{
    public class TimeServices : ITimeServices
    {
        private DateTime startDate = new DateTime(2014, 9, 29, 18, 00, 00);
        private int chickenDivisor = 6;
        public DateTimeServiceModel GetUpdate(DateTime currentDate)
        {
            var data = new DateTimeServiceModel
            {
                Days = this.CalculateDays(currentDate),
                Minutes = this.CalculateMinutes(currentDate),
                Chickens = this.CalculateChickens(currentDate),
            };

            return data;
        }

        private double CalculateDays(DateTime currentDate)
        {
            TimeSpan diff = currentDate.Subtract(startDate);
            double days = diff.TotalDays;
            return days;
        }

        private double CalculateMinutes(DateTime currentDate)
        {
            TimeSpan diff = currentDate.Subtract(startDate);
            double minutes = diff.TotalMinutes;
            return minutes;
        }

        private double CalculateChickens(DateTime currentDate)
        {
            return this.CalculateMinutes(currentDate) / chickenDivisor;
        }
    }
}
