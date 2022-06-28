function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

// moramo da pristupimo tom request objektu da bi iz njega izvadili params i ostale stvari.

// bitno je da razumemo da se ova funkcija izvrsava samo na serveru nakon deploy-ovanja, dakle nije staticno pre-generisana kao kod getStaticProps tokom build faze.
export async function getServerSideProps(context) {
  return {
    props: {
      username: 'Max',
    },
  };
}

// nastavi od 104
