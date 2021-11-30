
//función arrow
// Retornando objeto implicito, como solo es un objeto se usa (). en lugar de {}
const getUsuarioActivo = (nombre) => (
    {
      uid : 'ABC567',
      userName : nombre,
    }
)
  
const userActivo = getUsuarioActivo('Guadalupe');