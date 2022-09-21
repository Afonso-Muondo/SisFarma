namespace Farma.Domain.models
{
    public class Remedio
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public decimal Preco { get; set; }        
        public string Volume { get; set; }
        public int QtdEstoque { get; set; }
    }
}