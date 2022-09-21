using AutoMapper;
using Farma.Domain.models;
using Farma.Application.Dtos;

namespace Farma.Application.Helpers
{
    public class FarmaProfile : Profile
    {
        public FarmaProfile()
        {            
            CreateMap<Remedio, RemedioDto>().ReverseMap();
        }
    }
}