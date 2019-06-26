import {fetch} from 'whatwg-fetch'


export const getJobs = (searchValue = 'new+york', setResponseDate) => {
    const url = `https://jobs.github.com/positions.json?search=${searchValue}`

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
    }

    fetch(url, options)
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            console.log('parsed json', json)
            setResponseDate(JSON.parse(json))
        })
        .catch(function (ex) {
            console.log('parsing failed', ex)

        })
    /*setResponseDate([{
        "id": "d5955556-de1b-11e8-97e2-45ff61609ad8",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/d5955556-de1b-11e8-97e2-45ff61609ad8",
        "created_at": "Thu Nov 01 21:20:36 UTC 2018",
        "company": "PlayVS",
        "company_url": "http://www.playvs.com",
        "location": "Santa Monica, CA",
        "title": "Software Engineer, Full Stack",
        "description": "\u003cp\u003ePlayVS is building the infrastructure and official platform for high school esports. We work with game publishers and high school governing bodies to build and operate sanctioned leagues across the country. Our software products tie everything together, creating the world’s first full-stack sports platform. PlayVS is headquartered in Santa Monica, CA and rapidly expanding.\u003c/p\u003e\n\u003cp\u003eAs an engineer, you’ll be expected to do the normal tech startup duties including:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003eWriting clean, easily-maintainable code. We’re extremely proud of our lack of technical debt and want to keep it that way.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eDebugging, documentation, and unit testing. Everyone loves a smooth game day.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eHave a natural knack for user experience and pixel-perfect design. You should know CSS like it’s the back of your hand, and be extremely comfortable building modern responsive web apps.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eBeing flexible about your day-to-day tasks. We do everything from tweaking marketing pages to building the real-time match-play systems and data pipelines. You will wear many hats here.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eImproving our internal tooling and engineering process by contributing your knowledge and unique background.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eWhat we’re looking for:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003e4+ years of technical experience\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eInterest in gaming or esports, though no prior experience is required\nExperience using NodeJS or NoSQL data stores like Redis, RethinkDB or Mongo\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eExpert developing interfaces using ReactJS\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eTop-notch CSS skills\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eComfortable working with WebSockets\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eDegree in Computer Science preferred\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eAt PlayVS, we put a heavy emphasis on inclusiveness, diversity, and most importantly, player experience. Our team is small, scrappy, and incredibly talented. The challenges we solve on a daily basis are exciting and relevant. This role is $110K+.  If you are driven by seeing the immediate impact that your code brings, you’ll fit right in here.\u003c/p\u003e\n",
        "how_to_apply": "\u003cp\u003eEmail us at \u003ca href=\"mailto:careers@playvs.com\"\u003ecareers@playvs.com\u003c/a\u003e\u003c/p\u003e\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa2xXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--02900ed15126cfa0983ebd48ddba2b07539f4c62/7f3abee5-837b-49da-93f7-b44fbe23fc0a"
    }, {
        "id": "0a9333c4-71da-11e0-9ac7-692793c00b45",
        "type": "Full Time",
        "url": "https://jobs.github.com/positions/0a9333c4-71da-11e0-9ac7-692793c00b45",
        "created_at": "Thu Nov 01 13:09:37 UTC 2018",
        "company": "Jane Street",
        "company_url": "http://janestreet.com",
        "location": "New York, NY; London, UK; Hong Kong",
        "title": "Software Developer (Functional Programming)",
        "description": "\u003cp\u003eSoftware Developer\u003c/p\u003e\n\u003cp\u003eJane Street is a proprietary quantitative trading firm, focusing primarily on trading equities and equity derivatives. We use innovative technology, a scientific approach, and a deep understanding of markets to stay successful in our highly competitive field. We operate around the clock and around the globe, employing over 500 people in offices in New York, London and Hong Kong.\u003c/p\u003e\n\u003cp\u003eThe markets in which we trade change rapidly, but our intellectual approach changes faster still. Every day, we have new problems to solve and new theories to test. Our entrepreneurial culture is driven by our talented team of traders and programmers. At Jane Street, we don't come to work wanting to leave. We come to work excited to test new theories, have thought-provoking discussions, and maybe sneak in a game of ping-pong or two. Keeping our culture casual and our employees happy is of paramount importance to us.\u003c/p\u003e\n\u003cp\u003eWe are looking to hire great software developers with an interest in functional programming. OCaml, a statically typed functional programming language with similarities to Haskell, Scheme, Erlang, F# and SML, is our language of choice. We've got the largest team of OCaml developers in any industrial setting, and probably the world's largest OCaml codebase. We use OCaml for running our entire business, supporting everything from research to systems administration to trading systems. If you're interested in seeing how functional programming plays out in the real world, there's no better place.\u003c/p\u003e\n\u003cp\u003eThe atmosphere is informal and intellectual. There is a focus on education, and people learn about software and trading, both through formal classes and on the job. The work is challenging, and you get to see the practical impact of your efforts in quick and dramatic terms. Jane Street is also small enough that people have the freedom to get involved in many different areas of the business. Compensation is highly competitive, and there's a lot of room for growth.\u003c/p\u003e\n\u003cp\u003eYou can learn more about Jane Street and our technology from our main site, janestreet.com. You can also look at a a talk given at CMU about why Jane Street uses functional programming (\u003ca href=\"http://ocaml.janestreet.com/?q=node/61\"\u003ehttp://ocaml.janestreet.com/?q=node/61\u003c/a\u003e), and our programming blog (\u003ca href=\"http://ocaml.janestreet.com\"\u003ehttp://ocaml.janestreet.com\u003c/a\u003e).\u003c/p\u003e\n\u003cp\u003eWe also have extensive benefits, including:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e90% book reimbursement for work-related books\u003c/li\u003e\n\u003cli\u003e90% tuition reimbursement for continuing education\u003c/li\u003e\n\u003cli\u003eExcellent, zero-premium medical and dental insurance\u003c/li\u003e\n\u003cli\u003eFree lunch delivered daily from a selection of restaurants\u003c/li\u003e\n\u003cli\u003eCatered breakfasts and fresh brewed Peet's coffee\u003c/li\u003e\n\u003cli\u003eAn on-site, private gym in New York with towel service\u003c/li\u003e\n\u003cli\u003eKitchens fully stocked with a variety of snack choices\u003c/li\u003e\n\u003cli\u003eFull company 401(k) match up to 6% of salary, vests immediately\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eMore information at \u003ca href=\"http://janestreet.com/culture/benefits/\"\u003ehttp://janestreet.com/culture/benefits/\u003c/a\u003e\u003c/p\u003e\n",
        "how_to_apply": "\u003cp\u003ePlease apply through our web app form at  \u003ca href=\"https://www.janestreet.com/join-jane-street/apply/\"\u003ehttps://www.janestreet.com/join-jane-street/apply/\u003c/a\u003e\u003c/p\u003e\n",
        "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBanBXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f6dec9502d27094bbc9c7ff6c33806d0cdbb6faf/ac79023f-6a10-488b-be9f-751264dd8d06"
    }])*/
}