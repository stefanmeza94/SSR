function UserIdPage(props) {
  return <h1>{props.id}</h1>;
}

export default UserIdPage;

// ova funkcija se izvrsava na serveru za svaki zahtev koji nacinimo, tako da nextJs ovde ne pre-generise stranicu tokom build faze pa da mora da zna koje sve instance dinamickih stranica postoje kao kod staticnog generisanja, vec posto se ovde stranice pre-generisu tokom zahteva serveru nextJs ne mora da zna koje sve dinamicke stranice postoje.
export async function getServerSideProps(context) {
  const { params } = context;

  const userId = params.uid;

  return {
    props: {
      id: 'userid-' + userId,
    },
  };
}
