import React from 'react'

const Card = ({ data }) => {
    const tags = data.tags.split(',');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={data.largeImageURL} alt="" />
        <div className="px-4 pt-2 pb-4 ">
            <div>
            <h1 className="text-purple-400 pb-2 text-xl font-semibold">
                Photo by {data.user}
            </h1>
            <p>
                <strong>Views : </strong>{data.views}
            </p>
            <p>
                <strong>Downloads :</strong>{data.downloads}
            </p>
            <p>
                <strong>Likes : </strong>{data.likes}
            </p>
            </div>
            <div className="pt-3 flex flex-wrap">
                    {tags.map((tag,index) => (
                            <span key={index} className="bg-slate-200 py-1 px-2 rounded-full text-sm me-3 mt-2">
                                 #{tag}
                            </span>
                ))}
            </div>
        </div>
        </div>
  );
}

export default Card
