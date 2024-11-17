import living from './ml.jpg'
import kitchen from './mk.jpg'
import table from './mt.jpg'
import bed from './mb.jpeg'
import dinig from './d3.jpg'
import singlebed from './sbm.jpg'
import bath from './brm.png'
import chair from './cm.jpg'
import dressing from './dsm.jpeg'
import tvunit from './tv3.jpg'
const Sections=[
    {
        name:"living room",
        id: 1,
        image:living ,
        value:'/living'
    },
    {
        name:"Bed room",
        id: 2,
        image:bed ,
        value:'/bedroom'

    }, {
        name:"kitchen ",
        id: 3,
        image:  kitchen,
        value:'/kitchen'

    }, {
        name:"Dining Room",
        id: 4,
        image:dinig ,
        value:'/diningroom'

    }, 
    {
        name:"table",
        id: 5,
        image:table ,
        value:'./tables'

    }, 
    {
        name:"Dressing Room",
        id: 6,
        image:dressing ,
        value:'/dressing'

    },   {
        name:"tv Unit",
        id: 7,
        image:tvunit ,
        value:'/tvunits'

    },   {
        name:"Single bed",
        id: 8,
        image:singlebed ,
        value:'/singlebed'

    },   {
        name:"Bathroom",
        id: 9,
        image:bath ,
        value:'/bath'

    },   {
        name:"Chair",
        id: 10,
        image:chair ,
        value:'/chair'

    }, 
]
export default Sections