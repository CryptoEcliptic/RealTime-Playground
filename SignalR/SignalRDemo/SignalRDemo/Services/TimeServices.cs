using SignalRDemo.DTOs;
using System;

namespace SignalRDemo.Services
{
    public class TimeServices : ITimeServices
    {
        private const int boxGroupDivisor = 24;
        private DateTime startDate = new DateTime(2014, 9, 29, 18, 30, 00);
        private int chickenDivisor = 1;
        private int groupDivisor = 13;
        private int boxDivisor = 12;
        public DateTimeServiceModel GetUpdate(DateTime currentDate)
        {
            var data = new DateTimeServiceModel
            {
                Days = this.CalculateDays(currentDate),
                Minutes = this.CalculateMinutes(currentDate),
                Chickens = this.CalculateChickens(currentDate),
                ChickenGroups = this.CalculateChickenGroups(currentDate),
                TotalBoxes = this.CalculateBoxes(currentDate),
                BoxGroup = this.CalculateBoxGroup(currentDate)
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

        private double CalculateChickenGroups(DateTime currentDate)
        {
            return this.CalculateChickens(currentDate) % groupDivisor;
        }
        private double CalculateBoxes(DateTime currentDate)
        {
            return this.CalculateChickens(currentDate) / boxDivisor;
        }
        private double CalculateBoxGroup(DateTime currentDate)
        {
            return this.CalculateBoxes(currentDate) % boxGroupDivisor;
        }
    }
}
