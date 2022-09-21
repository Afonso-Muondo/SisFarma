using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.Domain.models;

namespace Farma.Infra.Contratos
{
    public interface IFarmaInfra
    {
        Task<Remedio[]> GetAllRemediosByNomeAsync(string nome);
        Task<Remedio[]> GetAllRemediosAsync();
        Task<Remedio> GetRemedioByIdAsync(int id);
    }
}