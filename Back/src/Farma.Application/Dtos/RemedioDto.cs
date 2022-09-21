using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Farma.Application.Dtos
{
    public class RemedioDto
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }        
        public string Volume { get; set; }
        public int QtdEstoque { get; set; }
    }
}