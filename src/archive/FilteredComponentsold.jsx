function Item({ videos }) {
  return (
    <div className="">
      <h2 className="font-bold text-[14px]">{videos.title}</h2>
      <p className="text-gray-500">{videos.description}</p>
    </div>
  );
}

function Items({ videos }) {
  return (
    <div className="">
      {videos.map((video, id) => (
        // <Item key={id} videos={video} />
        <div className="" key={id}>
          <h2 className="font-bold text-[14px]">{video.title}</h2>
          <p className="text-gray-500">{video.description}</p>
        </div>
      ))}
    </div>
  );
}

const FilteredComponents = () => {
  let videoList = [
    { title: "1. React: The Framework", description: "React 2013, Facebook" },
    {
      title: "2. React Docs: Understanding",
      description: "Meta, now Facebook",
    },
    {
      title: "3. Facebook React Native",
      description: "2016, Facebook React Native",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = videoList.filter(
    (video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      video.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="px-3 rounded-md p-1"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {filteredItems.map((id) => (
          <div className="" key={id}>
            <Items videos={videoList} />
          </div>
        ))}
      </div>
    </div>
  );
};
