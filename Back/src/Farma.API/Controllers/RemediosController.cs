using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.API.Data;
using Farma.API.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Farma.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RemediosController : ControllerBase
    {        

    private readonly DataContext context;
    public RemediosController(DataContext context)
    {
        this.context = context;
    }

    [HttpGet]
    public IEnumerable<Remedio> Get()
    {
        return this.context.Remedios;
    }

    [HttpGet("{id}")]
    public Remedio Get(int id)
    {
        return this.context.Remedios.FirstOrDefault(remedio => remedio.RemedioId == id);
    }

    [HttpPost]
    public string Post()
    {
        return "Exemplo de Post";
    }

    [HttpPut("{id}")]
    public string Put(int id)
    {
        return $"Exemplo de Put com id = {id}";
    }

    [HttpDelete("{id}")]
    public string Delete(int id)
    {
        return $"Exemplo de Delete com id = {id}";
    }
}
}
