import React from "react";
import { useEffect } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { slugify } from "../helpers";

function BlogDetail() {
  const location = useLocation();
  const { title, category } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  const articles = [
    {
      title: "Amazing Framework CSS",
      img: "https://source.unsplash.com/220x120?ui",
      category: "ui"
    },
    {
      title: "Why Programmer always use Macbook ?",
      img: "https://source.unsplash.com/220x120?macbook",
      category: "macbook"
    },
    {
      title: "Write your personal Blog",
      img: "https://source.unsplash.com/220x120?blog",
      category: "blog"
    }
  ];

  function articleState(item) {
    return {
      title: item.title,
      category: item.category
    };
  }

  const RecomendedArticle = () => (
    <div className="w-full lg:w-1/3 sticky top-20 h-max">
      <p className="text-lg dark:text-textDark py-4 font-semibold uppercase">
        Recomended Articles
      </p>
      <div className="space-y-5">
        {articles.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl bg-gradient-to-l from-primary to-sky-500 w-full shadow-md  hover:cursor-pointer hover:opacity-70"
          >
            <Link
              to={`/blog/${slugify(item.title)}`}
              state={articleState(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full rounded-t-xl opacity-90 hover:opacity-70"
              />
              <p className="py-3 mx-3 text-white font-semibold">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="pt-32 pb-32 px-10 lg:flex lg:space-x-6">
        <div className="w-full lg:w-2/3">
          <h3 className="font-bold text-3xl mt-4 text-primary dark:text-cyan-500">
            {" "}
            {title}{" "}
          </h3>
          <p className="text-secondary dark:text-textDark py-3 text-md">
            <FaUser className="inline mb-1 mr-1" size={14} /> Ikhbal Dwiyantoro
            -
            <span className="text-cyan-900 dark:text-slate-300">
              {" "}
              <FaCalendar className="inline mb-1 mx-1" /> 5 September 2022
            </span>
          </p>
          <div className="py-3 rounded-xl">
            <img
              src={`https://source.unsplash.com/720x350?${category}`}
              className="w-full rounded-xl mb-4 shadow-md"
            />
            <p className="text-secondary dark:text-textDark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates ratione iste, quis, molestias quos, voluptatem atque
              omnis earum amet ullam nemo distinctio excepturi quibusdam beatae
              praesentium ad sunt nobis officiis. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed fuga incidunt, sint, quo
              eligendi, est labore esse quisquam adipisci expedita commodi?
              Rerum mollitia earum possimus quidem assumenda ullam ducimus
              aliquid? Nostrum, et. Dicta quaerat eius, voluptas voluptates.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut rem,
              saepe aspernatur nesciunt odio minima enim optio? Adipisci debitis
              libero odit minus quia nesciunt, repudiandae voluptas
              exercitationem asperiores cupiditate ea. Voluptatem adipisci
              mollitia iure neque sequi inventore tempora tempore nulla. Autem
              amet repudiandae distinctio aut odit corporis laboriosam omnis?
              Magni adipisci eum omnis dignissimos provident earum aut cum
              dolorum placeat. Delectus labore consequatur quam quo facere nemo,
              accusantium dolor dolorum, illum voluptate officia. Neque illum
              nesciunt hic blanditiis assumenda mollitia aut numquam dolorum
              porro, inventore voluptatum dolores quam, accusantium consectetur.
              Quibusdam ea laudantium, iste expedita quos alias voluptatum
              labore beatae quis excepturi laboriosam temporibus eaque illum
              rerum nemo. Ullam doloribus iusto perspiciatis obcaecati voluptas.
              Cumque minus porro voluptate saepe tenetur. <br />
              <br />
              adipisicing elit. Laboriosam totam sapiente quidem cum quaerat
              aliquam perspiciatis corrupti ex consectetur reiciendis iusto
              doloribus fugiat aut culpa quod, ut necessitatibus, nisi
              inventore. Exercitationem, et deleniti earum similique vel
              repellat, unde alias fugit sed numquam ab optio facilis magnam
              quam ea voluptas beatae ad reprehenderit sunt itaque, excepturi
              recusandae rerum id possimus. Animi. Enim reiciendis molestias,
              tempore voluptates nisi vel sunt illo vitae saepe! Ut ullam labore
              aliquam, ad beatae optio magnam! Omnis sapiente corrupti quos
              necessitatibus, nisi pariatur perspiciatis velit minima veniam.
              Fugit porro eos voluptate quia exercitationem ea totam sit
              deleniti beatae? Explicabo aliquid, molestias vel distinctio ea
              est? Eum ad at enim rem maxime asperiores et vitae laborum labore
              sint? Vitae, pariatur repudiandae, animi expedita, cumque modi
              asperiores quod fuga assumenda minima iste itaque aut odit eum
              iusto corporis veritatis officia voluptates beatae sint veniam
              saepe numquam vel excepturi. Vitae. Veritatis beatae quia
              exercitationem incidunt eveniet veniam laudantium totam, deserunt
              quas eius consequatur maxime, impedit alias doloribus praesentium.
              Quos cum dolore dicta quia doloribus libero ea modi culpa
              quibusdam aliquam. Alias vitae ipsa earum cum repudiandae dolores
              odio fugiat aliquid. Nisi molestias itaque corporis sunt ab! Ea
              quam doloremque maxime placeat, eveniet, reprehenderit totam, quia
              ullam repellat blanditiis quidem voluptatum? Qui repellat facere
              deserunt iste quae quam vitae maxime. Sunt nostrum saepe
              reprehenderit iure exercitationem sapiente non, nam nesciunt id
              necessitatibus amet. Doloremque unde necessitatibus est
              accusantium sit nam. Nostrum. Quos quas amet nihil nobis quam
              quisquam repellendus dolore at magnam necessitatibus nesciunt rem,
              porro impedit error doloremque sint consequatur alias quo facilis,
              est veritatis. Ullam sit facere accusamus ex! Placeat eum
              voluptate expedita, magni consequuntur commodi ut atque obcaecati
              pariatur ipsum numquam a! Quaerat exercitationem, beatae voluptate
              nihil ad, officiis veritatis voluptatibus debitis placeat nulla
              ipsam perspiciatis ab ullam?
            </p>
          </div>
        </div>
        <RecomendedArticle />
      </div>
    </Layout>
  );
}

export default BlogDetail;
