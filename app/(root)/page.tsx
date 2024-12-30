import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  const posts = [
    { _id: 1, _createdAt: new Date(), views: 55, author: { _id: 1, name: "John Doe" }, image: "https://picsum.photos/800/300", category: "Robots", title: "We Robots", description: "This is the description of the startup." },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup, <br /> Connect With Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl"> Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
          <ul className="mt-7 card_grid">
            {posts.length > 0 ? posts.map((post) => (
              <StartupCard key={post?._id} post={post} />
            )) : <p className="no-results">No Startups Found</p>}
          </ul>
        </p>
      </section>
    </>
  );
}
