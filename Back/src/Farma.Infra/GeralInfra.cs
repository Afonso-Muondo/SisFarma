using System.Threading.Tasks;
using Farma.Infra.Contextos;

namespace Farma.Infra.Contratos
{
    public class GeralInfra : IGeralInfra
    {
        private readonly FarmaContext context;
        public GeralInfra(FarmaContext context)
        {
            this.context = context;            
        }

        public void Add<T>(T entity) where T : class
        {
            this.context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            this.context.Update(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            this.context.Remove(entity);
        }

        public void DeleteRange<T>(T[] entity) where T : class
        {
            this.context.RemoveRange(entity);
        }

        public async Task<bool> SaveChangesAsync()
        {
            return (await this.context.SaveChangesAsync())>0;
        }
    }
}