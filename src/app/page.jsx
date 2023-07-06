import React from 'react'
import Movies from './components/Movies'

const movies = [
  {
    id: 1,
    name: "Father Stu",
    year: "25 Mar 2023",
    director: "Rosalind Ross",
    image: "/images/fatherstu.jpeg",
    synopsis: "Father Stu is a 2022 biographical drama film starring Mark Wahlberg as Stuart Long, a boxer-turned-Catholic priest who lives with a progressive muscle disorder. The film is written and directed by Rosalind Ross in her directorial debut. "
  },
  {
    id: 2,
    name: "Acrimony",
    year: "29 Mar 2018",
    director: "Tyler Perry",
    image: "/images/acrimony.jpeg",
    synopsis: "Acrimony is an American psychological thriller film written, produced and directed by Tyler Perry. The film stars Taraji P. Henson, Lyriq Bent and Crystle Stewart. It follows a loyal wife who decides to take revenge on her ex-husband who has wronged her in life.  "
  },
  {
    id: 3,
    name: "King Richard",
    year: "19 Nov 2021",
    director: "Reinaldo Marcus Green",
    image: "/images/kingrichard.jpeg",
    synopsis: "King Richard is a 2021 American biographical sports drama film directed by Reinaldo Marcus Green and written by Zach Baylin. The film stars Will Smith as Richard Williams, the father and coach of famed tennis players Venus and Serena Williams (both of whom served as executive producers on the film). "
  },
  {
    id: 4,
    name: "Inside Out",
    year: "19 Jun 2015",
    director: "Pete Docter",
    image: "/images/insideout.jpeg",
    synopsis: "Inside Out is a 2015 American computer-animated film directed by Pete Docter from a screenplay he co-wrote with Meg LeFauve and Josh Cooley. Produced by Pixar Animation Studios, it stars the voices of Amy Poehler, Phyllis Smith, Richard Kind, Bill Hader, Lewis Black, Mindy Kaling, Kaitlyn Dias, Diane Lane, and Kyle MacLachlan.  "
  },
  {
    id: 5,
    name: "Anikulapo",
    year: "20 Sept 2022",
    director: "Anikulapo",
    image: "/images/anikulapo.jpeg",
    synopsis: "Aníkúlápó is a 2022 Nigerian epic fantasy film produced by Kunle Afolayan and distributed by Netflix. Released on 30 September 2022, it stars Kunle Remi, Bimbo Ademoye, Sola Sobowale,Hakeem Kae-Kazim and Taiwo Hassan. "
  },
  {
    id: 6,
    name: "Shanty Town",
    year: "20 Jan 2023",
    director: "Dimeji Ajibola",
    image: "/images/shantytown.jpeg",
    synopsis: "Shanty Town follows the story of a ruthless leader named Scar (Chidi Mokeme) who handles a lot of dirty business and is popularly regarded as the King of Shanty Town. Some of the Lagos hustlers who Scar and his associates have held captive has now decided to unite and wage war against him "
  },
]

export default function page() {
  return (
    <div>
      <Movies list = {movies}/>
    </div>
  )
}
