import { VedioCard } from "./VedioCard"

const vedios = [{
    title: "how to learn coding in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Swiming in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "200k",
    timestamp: "3 days ago",
},
{
    title: "how to learn watering in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Playing in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn coding in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Swiming in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "200k",
    timestamp: "3 days ago",
},
{
    title: "how to learn watering in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Playing in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn coding in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Swiming in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "200k",
    timestamp: "3 days ago",
},
{
    title: "how to learn watering in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Playing in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn coding in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Swiming in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "200k",
    timestamp: "3 days ago",
},
{
    title: "how to learn watering in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
},
{
    title: "how to learn Playing in 30 days",
    author: "Shivam Sehgal",
    image: "image.jpg",
    views: "2M",
    timestamp: "3 days ago",
}]

export function VedioGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {vedios.map(v => <div>
            <VedioCard title={v.title} author={v.author} views={v.views} image={v.image} timestamp={v.timestamp} />
        </div>)}
    </div>
}