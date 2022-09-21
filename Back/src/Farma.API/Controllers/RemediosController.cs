using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.Application.Contratos;
using Farma.Application.Dtos;
using Farma.Domain.models;
using Farma.Infra.Contextos;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Farma.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RemediosController : ControllerBase
    {
        private readonly IFarmaService farmaService;

        public RemediosController(IFarmaService farmaService)
    {
            this.farmaService = farmaService;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var remedios = await this.farmaService.GetAllRemediosAsync();
            if (remedios == null) return NoContent();            

            return Ok(remedios);
        }
        catch (Exception ex)
        {            
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar recuperar Produtos. Erro: {ex.Message}");
        }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        try
        {
            var remedio = await this.farmaService.GetRemedioByIdAsync(id);
            if (remedio == null) return NoContent();

            return Ok(remedio);
        }
        catch (Exception ex)
        {            
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar recuperar Produtos. Erro: {ex.Message}");
        }
    }

    [HttpGet("{nome}/nome")]
    public async Task<IActionResult> GetByNome(string nome)
    {
        try
        {
            var remedio = await this.farmaService.GetAllRemediosByNomeAsync(nome);
            if (remedio == null) return NoContent();

            return Ok(remedio);
        }
        catch (Exception ex)
        {            
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar recuperar Produtos. Erro: {ex.Message}");
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post(RemedioDto model)
    {
        try
        {
            var remedio = await this.farmaService.AddRemedios(model);
            if (remedio == null) return NoContent();

            return Ok(remedio);
        }
        catch (Exception ex)
        {            
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar adicionar Produtos. Erro: {ex.Message}");
        }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, RemedioDto model)
    {
        try
        {
            var remedio = await this.farmaService.UpdateRemedio(id, model);
            if (remedio == null) return NoContent();

            return Ok(remedio);
            
        }
        catch (Exception ex)
        {            
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar atualizar Produtos. Erro: {ex.Message}");
        }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            var remedio = await this.farmaService.GetRemedioByIdAsync(id);
            if(remedio == null) return NoContent();

            return await this.farmaService.DeleteRemedio(id) 
                ? Ok(new { message = "Deletado!" })
                :throw new Exception("Ocorreu um problema não específico ao tentar deletar Produto.");
        }
        catch (Exception ex)
        {            
            return this.StatusCode(StatusCodes.Status500InternalServerError, 
                $"Erro ao tentar deletar Produto. Erro: {ex.Message}");
        }
    }    
    }
}
