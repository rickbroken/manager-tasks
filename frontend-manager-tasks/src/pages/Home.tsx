import ContTasks from "../components/home-componets/ContTasks";
import ContTask from "../components/home-componets/ContTask";

const Home = () => {
  return (
    <>
      <section className="w-full flex gap-10">
        <ContTasks title="PENDIENTES" icon="lets-icons:subttasks" color="#FFD700">
          <ContTask
            title="Llevar materiales a la obra"
            date="16 Sep 2024 - 10:09 am"
            colorTag="027ae7"
            BgColor="bg-amber-100"
          >
            Llevar cemento y barillas a la casa en construcción de la calle 5. Además, verificar que todos los materiales lleguen en buen estado y en la cantidad solicitada. Coordinar con el encargado de la obra para asegurar que todo esté listo para el inicio de la construcción. r con el encargado de la obra para asegurar que todo esté listo para el inicio de la construcción.
          </ContTask>
        </ContTasks>

        <ContTasks title="EN PROCESO" icon="uim:process" color="#1ba0ae">

        </ContTasks>

        <ContTasks title="TERMINADAS" icon="icon-park-twotone:success" color="#00bf02">

        </ContTasks>
      </section>
    </>
  );
}

export default Home;