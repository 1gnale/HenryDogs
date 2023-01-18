import stylePages from "./stylePages.module.css"



export const Paginado = ({
  dogsCardsPerPage,
  allDogs,
  paginado,
  paginadoPrev,
  paginadoNext,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsCardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (

    <div className={stylePages.margin}>
      <div className={stylePages.pagination} onClick={paginadoPrev}>
        <a>{`<`}</a>
      </div>
      &nbsp;
      {pageNumbers.map((number) => (
        <div className={currentPage === number? stylePages.currentPage : stylePages.pagination}
          key={number}
          onClick={() => paginado(number)}
        >
          {number}
        </div>
      ))}
      &nbsp;
      <div className={stylePages.pagination} onClick={paginadoNext}>
        <a>{`>`}</a>
      </div>
    </div>
  );
};
