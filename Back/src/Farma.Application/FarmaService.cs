using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.Application.Contratos;
using Farma.Domain.models;
using Farma.Infra.Contratos;
using Farma.Application.Dtos;
using AutoMapper;

namespace Farma.Application
{
    public class FarmaService : IFarmaService
    {   
        private readonly IGeralInfra geralInfra;
        private readonly IFarmaInfra farmaInfra;
        private readonly IMapper mapper;

        public FarmaService(IGeralInfra geralInfra, 
                            IFarmaInfra farmaInfra,
                            IMapper mapper)
        {
            this.farmaInfra = farmaInfra;
            this.geralInfra = geralInfra;            
            this.mapper = mapper;
        }

        public async Task<RemedioDto> AddRemedios(RemedioDto model)
        {
            try 
            {
                var remedio = this.mapper.Map<Remedio>(model);

                this.geralInfra.Add<Remedio>(remedio);
                if (await this.geralInfra.SaveChangesAsync())
                {
                    var remedioRetorno = await this.farmaInfra.GetRemedioByIdAsync(remedio.Id);

                    return this.mapper.Map<RemedioDto>(remedioRetorno);
                }
                return null;
            }            
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
        
        public async Task<RemedioDto> UpdateRemedio(int id, RemedioDto model)
        {
            try 
            {
                var remedio = await this.farmaInfra.GetRemedioByIdAsync(id);
                if (remedio == null) return null;

                model.Id = remedio.Id;

                this.mapper.Map(model, remedio);

                this.geralInfra.Update<Remedio>(remedio);

                if (await this.geralInfra.SaveChangesAsync())
                {
                    var remedioRetorno = await this.farmaInfra.GetRemedioByIdAsync(remedio.Id);

                    return this.mapper.Map<RemedioDto>(remedioRetorno);
                }
                return null;
            }            
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> DeleteRemedio(int id)
        {
            try 
            {
                var remedio = await this.farmaInfra.GetRemedioByIdAsync(id);
                if (remedio == null) throw new Exception("Evento para delete não encontrado.");

                this.geralInfra.Delete<Remedio>(remedio);
                return await this.geralInfra.SaveChangesAsync();                
            }            
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<RemedioDto[]> GetAllRemediosByNomeAsync(string nome)
        {
            try
            {
                var remedios = await this.farmaInfra.GetAllRemediosByNomeAsync(nome);
                if (remedios == null) return null;
                
                var result = this.mapper.Map<RemedioDto[]>(remedios);

                return result;
            }
            catch (Exception ex)
            {                
                throw new Exception(ex.Message);
            }
        }

        public async Task<RemedioDto[]> GetAllRemediosAsync()
        {
            try
            {
                var remedios = await this.farmaInfra.GetAllRemediosAsync();
                if (remedios == null) return null;

                var remediosRetorno = new List<RemedioDto>();

                var result = this.mapper.Map<RemedioDto[]>(remedios);

                return result;
            
            }
            catch (Exception ex)
            {                
                throw new Exception(ex.Message);
            }
        }

        public async Task<RemedioDto> GetRemedioByIdAsync(int id)
        {
            try
            {
                var remedio = await this.farmaInfra.GetRemedioByIdAsync(id);
                if (remedio == null) return null;
                
                var result = this.mapper.Map<RemedioDto>(remedio);

                return result;
            }
            catch (Exception ex)
            {                
                throw new Exception(ex.Message);
            }
        }
    }
}
