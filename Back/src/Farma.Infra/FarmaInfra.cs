using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.Domain.models;
using Farma.Infra.Contextos;
using Farma.Infra.Contratos;
using Microsoft.EntityFrameworkCore;

namespace Farma.Infra
{
    public class FarmaInfra : IFarmaInfra
    {
        private readonly FarmaContext context;
        public FarmaInfra(FarmaContext context)
        {
            this.context = context;            
            this.context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;            
        }
       
        public async Task<Remedio[]> GetAllRemediosByNomeAsync(string nome)
        {
            IQueryable<Remedio> query = this.context.Remedios;

            query = query.OrderBy(r => r.Id)
                         .Where(r => r.Nome.ToLower().Contains(nome.ToLower()));
            
            return await query.ToArrayAsync();
        }

        public async Task<Remedio[]> GetAllRemediosAsync()
        {
            IQueryable<Remedio> query = this.context.Remedios;

            query = query.OrderBy(r => r.Id);
            
            return await query.ToArrayAsync();
        }

        public async Task<Remedio> GetRemedioByIdAsync(int id)
        {
            IQueryable<Remedio> query = this.context.Remedios;

            query = query.OrderBy(r => r.Id)
                         .Where(r => r.Id == id);
            
            return await query.FirstOrDefaultAsync();
        }      

    }
}