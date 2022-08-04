using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Farma.API.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Farma.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RemedioController : ControllerBase
    {
        public IEnumerable<Remedio> _remedio = new Remedio[] {
            new Remedio() {
                RemedioCodigo = 1,
                Nome = "Paracetamol",
                Preço = 14.90,
                Volume = " 500 gramas"
                },
                new Remedio() {
                RemedioCodigo = 2,
                Nome = "Drenison",
                Preço = 9.60,
                Volume = " 10 gramas"
                }
        };

        public RemedioController()
        {
        }

        [HttpGet]
        public IEnumerable<Remedio> Get()
        {
            return _remedio;              
        }

        [HttpGet("{codigo}")]
        public IEnumerable<Remedio> Get(int codigo)
        {
            return _remedio.Where(remedio => remedio.RemedioCodigo == codigo);              
        }

        [HttpPost]
        public string Post()
        {
            return "Exemplo de Post";
        }

        [HttpPut("{codigo}")]
        public string Put(int codigo)
        {
            return $"Exemplo de Put com id = {codigo}";
        }

        [HttpDelete("{codigo}")]
        public string Delete(int codigo)
        {
            return $"Exemplo de Delete com codigo = {codigo}";
        }
    }
}
