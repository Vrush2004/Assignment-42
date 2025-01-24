import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import History from "./views/History";
import Content from "./views/Content";
import "./index.css"

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Navbar/>
        <History/>
        <div className="flex gap-10 w-[90%] flex-wrap m-auto justify-between mt-[20px]">
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030647-olw8smi6p6xkd5ja7u3y72h4msxxi7c9160fqdafia.jpg"
                name="Mula Dam"
                category="Adventure, Natural / Scenic beauty, Recreational"
                desc="Also called as Dnyaneshwar Sagar Dam, Mula Dam is situated near the Mahatma Phule Krishi Vidyapeeth and is used for…"
            />
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030785-olw8sq9jgj2pnldtlvqgh1iz0cfeczr6domdnh4ute.jpg"
                name="Amriteshwar Temple"
                category=" Historic, Religious"
                desc="Temple Of Amriteshwar,At-Ratanwadi Taluka-Akole The temple of Amriteshwar datable to 12th-13th AD consists of a a garbhagriha, antarala and mahamandapa…"
            />
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030329-olw8sfxbdcok3vsua99k7m4wh3ud0bm4o9g1dfk6pu.jpg"
                name="Vishal Ganpati"
                category=" Religious"
                desc="Shri Vishal Ganapati,Maliwada,Ahmednagar Gram Devta of Ahmednagar,It is 11 feet in height."
            />
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030375-olw8sjoo4otpebndoaw2hl6qunbtv4120s1zajem0y.jpg"
                name="Devgad"
                category="Religious"
                desc="Taluka Newasa Around the temple there is park with lots of tree ,there is Pravara river behind the temple. Boating…"
            />
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030158-olw8se1mzolzgnvkl8gb2mlzac3mkxeo0052evmz2a.jpg"
                name="Shirdi"
                category="Religious"
                desc="Amongst the places of deep belief and faith in India, falls Shirdi – the place of Saint Sai Baba. The…"
            />
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030632-olw8slkcicwa1jkndbpbmkpo1f2kai8ip1cy93btoi.jpg"
                name="Bhandardara"
                category="Natural / Scenic beauty, Recreational"
                desc="Bhandardara Dam also known as Wilson Dam has its existence on Pravara River and is situated 150 metres above ground…"
            />
            <Content  
                image="https://cdn.s3waas.gov.in/s345fbc6d3e05ebd93369ce542e8f2322d/uploads/bfi_thumb/2018030645-olw8smi6p6xkd5ja7u3y72h4msxxi7c9160fqdafia.jpg"
                name="Nilwande Dam"
                category="Adventure, Recreational"
                desc="Nilwande Dam refers to two associated gravity dams built using roller-compacted concrete, the first use in India. They are situated…"
            />
        </div>
    </>
)