function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

// NextJs ce prvo da pokrene ovu funckiju getStaticProps() i tu vracamo zapravo props koji ce da bude prosledjen nasoj komponenti HomePage, ali naravno to ce sve da se desi pre nego sto ova komponenta bude ucitana i servirana unutar browsera. Unutar ove funkcije uvek moramo da vracamo objekat koji ima props properti. Ova funkcija zapravo priprema props objekat za nasu komponentu. Kod unutar getStaticProps nikada nece da bude vidljiv na klijentskoj strani. Sada ako proverimo page source videcemo da se ovaj sadrzaj produkta vidi unutar html stranice koju smo ucitali u brosweru (za razliku od obicnog react-a koji prilikom prvog ucitavanja stranice salje prazan html body)

export function getStaticProps() {
  return {
    props: {
      products: [
        { id: 'p1', title: 'Product 1' },
        { id: 'p2', title: 'Product 2' },
      ],
    },
  };
}

export default HomePage;
