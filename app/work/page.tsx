export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter"> My Bookshelf </h1>
      <p className="prose prose-neutral dark:prose-invert">
        Here are a list of books I am reading or have read.
      </p>
      <p className="italic text-gray-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
      <br></br>
      <ul className="list-none pl-5">
        <li className="mb-2">
          <a href="https://www.amazon.com/Black-Hole-Abandoned-Newtonians-Einstein/dp/0300219660"> Blackhole by Marcia Bartusiak </a>
        </li>
        <li className="mb-2">
        <a href="https://www.amazon.com/Periodic-Tales-Cultural-History-Elements/dp/0061824739"> Periodic Tables by Hugh Aldersey-Williams </a>
        </li>
        <li className="mb-2">
        <a href="https://www.amazon.com/Be-Love-Now-audiobook/dp/B004ADMCH2/ref=sr_1_1?crid=120SOGO0IIAHD&keywords=Ram+Dass+be+love+now&s=books&sprefix=ram+dass+be+love+now%2Cstripbooks%2C136&sr=1-1"> Be love now - ram dass </a>
        </li>
      </ul>
    </section>
  );
}
