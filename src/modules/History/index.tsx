import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';
import RestController from 'components/RestController';
import { historyStore } from 'modules/History/store/history';
import disciplineStore from 'store/disciplines';
import Game from './components/Game';
import PlayerInfo from './components/PlayerInfo';

const History = () => {
  const { id } = useParams();

  const { data, loading, success, errors } = historyStore.getState();
  const { discipline } = disciplineStore;

  useEffect(() => {
    historyStore.getHistoryAction(id);
  }, [discipline]);

  return (
    <PageFrame>
      <PageTitle withBackButton>История</PageTitle>
      {id && <PlayerInfo id={id} />}
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quam deserunt magni,
        maiores debitis aspernatur veniam vel eaque sit, accusantium esse sapiente soluta rerum
        pariatur impedit velit fugiat natus unde reprehenderit doloribus sequi aut minus itaque.
        Sequi expedita autem delectus. Quasi assumenda ipsam amet officia! Qui dolor autem, quasi
        officiis sed assumenda earum itaque nisi quidem quam odit voluptatibus voluptate eos, ea
        labore. In nemo aliquid temporibus nihil facere quis error eius libero, iusto animi,
        tenetur, repellat ratione adipisci architecto. Dolore asperiores ut illum quas aspernatur
        quibusdam nam placeat aut, ipsum accusamus cum natus error ipsam quae eius eos consequatur
        molestias ex delectus ab atque rerum mollitia eveniet! Magni earum ducimus quia similique
        minima autem sapiente nesciunt nihil, totam officia pariatur assumenda soluta neque, eius
        repellat odio quasi, rem id quos harum aperiam? Similique quos harum laudantium dolores? Rem
        deleniti cumque reprehenderit assumenda accusantium blanditiis ullam magnam? Alias,
        necessitatibus consequuntur, distinctio numquam cum labore ratione molestiae mollitia
        repudiandae atque recusandae architecto dolore blanditiis magnam doloribus neque?
        Accusantium autem ut in nostrum illo sed adipisci. Nisi doloribus, maxime magnam voluptas
        accusantium at adipisci praesentium? Dignissimos laboriosam dolore hic maxime debitis quo
        eos consectetur quis? Magni, a. Repellat amet pariatur inventore nesciunt quisquam nostrum
        quia enim dolorem? Dolore blanditiis vitae dicta repellat eius commodi repellendus accusamus
        temporibus. Provident tempore, quos corrupti numquam deleniti, tenetur harum dolor tempora
        quo minima assumenda quasi odio nisi enim earum facilis, nostrum magni sit laboriosam?
        Similique, magni maiores ipsam saepe velit asperiores veniam delectus dignissimos voluptates
        quia voluptas laborum veritatis nemo totam cupiditate incidunt vitae iusto pariatur itaque
        temporibus autem harum deserunt. Unde exercitationem, tempore alias facilis adipisci
        deserunt assumenda ducimus nemo minima debitis maxime ullam veniam recusandae mollitia, ex
        animi? Deleniti eum harum quod. Maxime mollitia, facere sapiente neque aliquam expedita
        recusandae dolorem non fuga modi.
        <RestController loading={loading} success={success} errors={errors}>
          {!!data.games.length && data.games.map((game) => <Game key={game.id} {...game} />)}
        </RestController>
      </div>
    </PageFrame>
  );
};

export default observer(History);
