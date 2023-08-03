import Swal from "sweetalert2";

export const textSlice = (text) => {
  const longitud = text.length;
  const mitad = Math.floor(longitud / 2);
  const parte1 = text.slice(0, mitad);
  const parte2 = text.slice(mitad);

  return [parte1, parte2];
};

export const sweetError = (id, getAPI, deleteDate, title) => {
  Swal.fire({
    title: `¿Estás de eliminar el ${title}?`,
    text: "Esta acción no se puede deshacer.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "¡Sí, eliminar!",
    cancelButtonText: "Cancelar",
  }).then(async (result) => {
    if (result.isConfirmed) {
      await deleteDate(id);
      getAPI();
    }
  });
};
