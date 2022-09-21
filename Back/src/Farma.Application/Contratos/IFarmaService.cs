using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.Domain.models;
using Farma.Application.Dtos;

namespace Farma.Application.Contratos
{
    public interface IFarmaService
    {
        Task<RemedioDto> AddRemedios(RemedioDto model);
        Task<RemedioDto> UpdateRemedio(int id, RemedioDto model);
        Task<bool> DeleteRemedio(int id);

        Task<RemedioDto[]> GetAllRemediosByNomeAsync(string nome);
        Task<RemedioDto[]> GetAllRemediosAsync();
        Task<RemedioDto> GetRemedioByIdAsync(int id);
    }
}