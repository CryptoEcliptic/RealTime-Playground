using SignalRDemo.DTOs;
using System;

namespace SignalRDemo.Services
{
    public interface ITimeServices
    {
        DateTimeServiceModel GetUpdate(DateTime currentDate);
    }
}
