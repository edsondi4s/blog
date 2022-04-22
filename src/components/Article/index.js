import Post from '../Post';

const Article = () => {

    //Fazer uma requisição a uma API

    return (
        <section className="container">
            <h3>Article</h3>
            <div className="mt-3 container-posts">
                <Post subtitle="tecnologia" title="O guia definitivo do Blog">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien risus, dignissim a ipsum non,
                    tempor sagittis orci. Vestibulum egestas nisi ante, sit amet consectetur orci eleifend a. Fusce eget nisi
                    sapien. In eu ante id libero consequat cursus eu sed neque. Suspendisse malesuada rutrum odio, eget
                    scelerisque magna.
                </Post>
                <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021?">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien risus, dignissim a ipsum non,
                    tempor sagittis orci. Vestibulum egestas nisi ante, sit amet consectetur orci eleifend a. Fusce eget nisi
                    sapien. In eu ante id libero consequat cursus eu sed neque. Suspendisse malesuada rutrum odio, eget
                    scelerisque magna.
                </Post>
                <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria." >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sapien risus, dignissim a ipsum non,
                    tempor sagittis orci. Vestibulum egestas nisi ante, sit amet consectetur orci eleifend a. Fusce eget nisi
                    sapien. In eu ante id libero consequat cursus eu sed neque. Suspendisse malesuada rutrum odio, eget
                    scelerisque magna.
                </Post>
            </div>
            
        </section>
        
    );
}

export default Article;
