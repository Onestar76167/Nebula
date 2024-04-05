import { IconCircleArrowLeft, IconCircleArrowRight, IconPointFilled ,IconCircleArrowUpRight } from "@tabler/icons-react";

function Home() {
	return (
		<>
			<div className="h-[1024px] bg-[url('/images/slide1.jpg')] px-[72px] bg-cover">
				<div className="py-12 flex items-center justify-between">
					<div className="flex items-center text-white">
						<img src="/images/logo.svg" alt="logo" />
						<p className="text-[22px]">nebula digital</p>
					</div>
					<div className="bg-gradient-to-r from-[#ffffff55] to-[#ffffff11] rounded-full w-[612px] h-[61px] px-4 text-xl flex items-center justify-around">
						<div className="text-white">Home</div>
						<div>Solutions</div>
						<div>Use cases</div>
						<div>About</div>
					</div>
					<div>
						<div className="flex items-center gap-2 py-4 px-7 text-xl bg-[#0F33E9] text-white rounded-full">
							<p>Let's talk</p>
							<IconCircleArrowRight />
						</div>
					</div>
				</div>
				<p className="banner-text text-white pt-20 mb-16">Pioneering data driven approach to modernize your business</p>
				<p className="text-white text-[26px] leading-[39px]">
					We deliver cutting edge technology platforms and data solutions for B2B enterprise
					<br />& governments, evolving their efficiency with revenue growth and cost reduction.
				</p>
			</div>
			<div className="bg-white p-[72px] mt-[-72px] rounded-t-[64px]">
				<p className="text-[80px] leading-[85px] mb-24">
					<span className="text-[#0057FF]">We are a technology platform</span> and data solution provider accelerating digital transformations with secure and actionable insights.
				</p>

				<div className="inline-block mb-12">
					<div className="border px-4 py-2 flex items-center gap-[10px] border-[#091F5B] rounded-full">
						<IconPointFilled />
						<p className="text-[#091F5B] font-medium">Our Clients</p>
					</div>
				</div>

				<div className="grid grid-cols-3 mb-24">
					<div className="flex">
						<div className="basis-[64px] grow-0 shrink-0 text-[36px] leading-[40px] font-medium text-[#0057FF]">01</div>
						<div className="flex-auto text-[#091F5B]">
							<p className="text-[30px] font-bold mb-2">Enterprises</p>
							<p className="text-lg">We deliver comprehensive digital transformation solutions. Through rigorous assessments and industry benchmarking, we pinpoint gaps and opportunities for growth. We then provide tailored platform and data solutions to bridge these gaps and empower you for future success.</p>
						</div>
					</div>
					<div className="flex">
						<div className="basis-[64px] grow-0 shrink-0 text-[36px] leading-[40px] font-medium text-[#0057FF]">02</div>
						<div className="flex-auto text-[#091F5B]">
							<p className="text-[30px] font-bold mb-2">Government</p>
							<p className="text-lg">We provide secure, government-grade technology platforms and tailored data solutions for Smart Bangladesh. Our solutions integrate advanced cybersecurity, analytics, AI, and blockchain technologies to ensure digital resilience and innovation.</p>
						</div>
					</div>
					<div className="flex">
						<div className="basis-[64px] grow-0 shrink-0 text-[36px] leading-[40px] font-medium text-[#0057FF]">03</div>
						<div className="flex-auto text-[#091F5B]">
							<p className="text-[30px] font-bold mb-2">Development Partner</p>
							<p className="text-lg">We deliver a data-driven approach to development, offering a comprehensive strategy for digital transformation within the development sector. This strategy prioritizes ESG factors, diversity, female empowerment, and youth engagement to ensure a holistic impact.</p>
						</div>
					</div>	
				</div>

				<div className="inline-block mb-12">
					<div className="border px-4 py-2 flex items-center gap-[10px] border-[#091F5B] rounded-full">
						<IconPointFilled />
						<p className="text-[#091F5B] font-medium">Our Solutions</p>
					</div>
				</div>

				<p className="text-[80px] leading-[85px] mb-24">
					Our solutions and apps are built over <span className="text-[#0057FF]">a strong data foundation and AI capabilities</span>
					<div className="h-[85px] flex items-end gap-1 float-right">
					<IconCircleArrowLeft size={64} strokeWidth={0.5}/>
					<IconCircleArrowRight size={64} strokeWidth={0.5} />
				</div>
				</p>

				<div class="grid grid-cols-4 gap-4 mb-24">
					<div className="w-[400px] h-[486px] bg-[#0F33E9] rounded-3xl relative">
						<div className="flex justify-between items-start p-6">
						<p className="text-white font-medium text-3xl">
							Data Maturity Assessment
						</p>
						<p className="text-white text-3xl pt-4">
							1
						</p>
						</div>
						<div className="flex items-end absolute bottom-8 w-[400px]">
						<p className="font-medium text-small-font leading-small-line-height text-white pl-6 w-[307px]">
						Comprehensive approach to evaluate an organization's digital readiness
						</p>
						<IconCircleArrowUpRight size={64} strokeWidth={0.5} className="text-white" />
						</div>
					</div>
					<div className="w-[400px] h-[486px] bg-[#EDF0F5] rounded-3xl relative">
						<div className="flex justify-between items-start p-6">
						<p className="text-[#091F5B] font-medium text-3xl">
							Technology Platform
						</p>
						<p className="text-[#091F5B] text-3xl pt-4">
							2
						</p>
						</div>
						<div className="flex items-end absolute bottom-8">
						<p className="font-medium text-small-font leading-small-line-height text-[#091F5B] pl-6 w-[307px]">
							Robust & scalable digital foundation for driving growth and efficiency
						</p>
						<IconCircleArrowUpRight size={64} strokeWidth={0.5} className="text-[#091F5B]" />
						</div>
					</div>					
					<div className="w-[400px] h-[486px] bg-[#DFF5FF] rounded-3xl relative">
						<div className="flex justify-between items-start p-6">
						<p className="text-[#091F5B] font-medium text-3xl">
							Data Analytics & AI Solutions
						</p>
						<p className="text-[#091F5B] text-3xl pt-4">
							3
						</p>
						</div>
						<div className="flex items-end absolute bottom-8">
						<p className="font-medium text-small-font leading-small-line-height text-[#091F5B] pl-6 w-[307px]">
							Unlock actionable insights and discover data monetization
						</p>
						<IconCircleArrowUpRight size={64} strokeWidth={0.5} className="text-[#091F5B]" />
						</div>
					</div>					
					<div className="w-[400px] h-[486px] bg-[#D0D5DD] rounded-3xl relative">
						<div className="flex justify-between items-start p-6">
						<p className="text-[#091F5B] font-medium text-3xl">
							Cyber Security Solutions
						</p>
						<p className="text-[#091F5B] text-3xl pt-4">
							4
						</p>
						</div>
						<div className="flex items-end absolute bottom-8">
						<p className="font-medium text-small-font leading-small-line-height text-[#091F5B] pl-6 w-[307px]">
							Expert risk assessments, mitigation plans & tailored security strategies
						</p>
						<IconCircleArrowUpRight size={64} strokeWidth={0.5} className="text-[#091F5B]" />
						</div>
					</div>
				</div>
				
				<div className="inline-block mb-12">
					<div className="border px-4 py-2 flex items-center gap-[10px] border-[#091F5B] rounded-full">
						<IconPointFilled />
						<p className="text-[#091F5B] font-medium">Use Cases</p>
					</div>
				</div>

				<p className="text-[80px] leading-[85px] mb-24">
					See use cases of how we can  <span className="text-[#0057FF]">empower your organizations </span> and create meaningful impact
					<div className="h-[85px] flex items-end gap-1 float-right">
					<IconCircleArrowLeft size={64} strokeWidth={0.5}/>
					<IconCircleArrowRight size={64} strokeWidth={0.5} />
				</div>
				</p>

				<div class="grid grid-cols-4 gap-4 mb-24 text-[#091F5B] " >
					<div>
						<img src="/images/1.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
						<p class="text-2xl font-bold min-h-[100px] " >
						Multi Touch Attribution (MTA) Model
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px] text-left" >
						The model estimates the impact of digital marketing channels on signups, using MTA scores to optimize campaigns.
						</p>
						<br/>
						<p class="text-2xl font-bold underline " >
						Learn more
						</p>
					</div>
					<div>
						<img src="/images/2.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
						<p class="text-2xl font-bold min-h-[100px]" >
						AI assistant using LLM model
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px] text-left" >
						Fine-tuned a Large Language Model (LLM) with enterprise-specific data to support natural language queries about business offerings.
						</p>
						<br/>
						<p class="text-2xl font-bold underline" >
						Learn more
						</p> 
					</div>
					<div>
						<img src="/images/3.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
						<p class="text-2xl font-bold min-h-[100px]" >
						Personalized product and service recommendation
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px] text-left" >
						Customer attributes are analyzed by this ML algorithm, building a rich profile to recommend targeted services based on their interests.
						</p>
						<br/>
						<p class="text-2xl font-bold underline" >
						Learn more
						</p>
					</div>
					<div>
					<img src="/images/4.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
					<p class="text-2xl font-bold min-h-[100px]" >
						Personalized and adaptive learning with AI agent
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px] text-left" >
						A reinforcement learning model that dynamically adapts course content delivery based on individual learner interactions.
						</p>
						<br/>
						<p class="text-2xl font-bold underline" >
						Learn more
						</p>
					</div>
				</div>

				
				<div className="inline-block mb-12">
					<div className="border px-4 py-2 flex items-center gap-[10px] border-[#091F5B] rounded-full">
						<IconPointFilled />
						<p className="text-[#091F5B] font-medium">Testimonials </p>
					</div>
				</div>

				<p className="text-[80px] leading-[85px] mb-24">
					Here What  <span className="text-[#0057FF]">Our Clients </span> Have to Say
					<div className="h-[85px] flex items-end gap-1 float-right">
					<IconCircleArrowLeft size={64} strokeWidth={0.5}/>
					<IconCircleArrowRight size={64} strokeWidth={0.5} />
				</div>
				</p>  

				<div class="grid grid-cols-2 gap-4 mb-24">
				<div class="aspect-w-16 aspect-h-9">
					<img src="/images/video1.png" alt="video1" class="object-cover w-full h-full rounded-3xl"/>
				</div>
				<div class="aspect-w-16 aspect-h-9">
					<img src="/images/video2.png" alt="video2" class="object-cover w-full h-full rounded-3xl"/>
				</div>
				</div>
				
			</div>
			<div className="bg-[#EDF0F5] rounded-t-[48px] mt-[-48px] p-[72px] text-[#091F5B]">
				<div className="inline-block mb-12">
					<div className="border px-4 py-2 flex items-center gap-[10px] border-[#091F5B] rounded-full">
						<IconPointFilled />
						<p className="text-[#091F5B] font-medium">Insights </p>
					</div>
				</div>

				<p className="text-[80px] leading-[85px] mb-24">
					Discover Our Insights: <span className="text-[#0057FF]">Stay Ahead in the Digital Landscape </span> Have to Say
					<div className="h-[85px] flex items-end gap-1 float-right">
					<IconCircleArrowLeft size={64} strokeWidth={0.5}/>
					<IconCircleArrowRight size={64} strokeWidth={0.5} />
				</div>
				</p>

				<div class="grid grid-cols-4 gap-4 mb-24 text-[#091F5B] " >
					<div class="flex flex-col ">
						<img src="/images/digital1.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
						<p class="text-2xl font-bold mb-4" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px]" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim ac ipsum at lacinia. Donec elementum vehicula sem.
						</p>
						<br/>
						<p class="text-2xl font-bold underline " >
						Read Full Article
						</p>
					</div>
					<div class="flex flex-col">
						<img src="/images/digital2.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
						<p class="text-2xl font-bold mb-4" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px]" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim ac ipsum at lacinia. Donec elementum vehicula sem.
						</p>
						<br/>
						<p class="text-2xl font-bold underline" >
						Read Full Article
						</p>
					</div>
					<div class="flex flex-col">
						<img src="/images/digital3.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
						<p class="text-2xl font-bold mb-4" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px]" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim ac ipsum at lacinia. Donec elementum vehicula sem.
						</p>
						<br/>
						<p class="text-2xl font-bold underline" >
						Read Full Article
						</p>
					</div>
					<div class="flex flex-col">
					<img src="/images/digital4.png" alt="alt1" className="w-full aspect-[1/1.08] object-cover rounded-3xl mb-4"/>
					<p class="text-2xl font-bold mb-4" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</p>
						<br/>
						<p class="text-2xl font-medium min-h-[200px]" >
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim ac ipsum at lacinia. Donec elementum vehicula sem.
						</p>
						<br/>
						<p class="text-2xl font-bold underline" >
						Read Full Article
						</p>
					</div>
				</div>
				<p className="text-[80px] font-normal">
					Contact us to learn more
				</p>  
				<br/>
				<div className="inline-flex items-center gap-3 py-3 px-7 text-xl bg-[#0F33E9] text-white rounded-full">
					<p>Let's talk about data</p>
					<IconCircleArrowRight />
				</div>
				<div className="my-5">
				<p className="text-[24px] mb-4 font-medium">
				nebula digital
				</p>
				<div className="flex items-center justify-between">
				<p className="text-[17px]">
					Ventura Iconica, Level 3, Holding 37, Road No. 11, Block H, Bir Uttam Khademul Bashar Road, Banani C/A, Dhaka 1213, Bangladesh</p>	
					<div className="flex gap-4">
						<img src="/images/brandLinkedin.svg" alt="brandLinkedin"/>
						<img src="/images/brandFacebook.svg" alt="brandFacebook"/>
				</div>
				</div>
				</div>
				</div>
				<div className="bg-[#091F5B] h-12 text-sm text-white flex items-center justify-between px-12">
				<div className="flex gap-4">
					<div>Home</div>
					<div>Solutions</div>
					<div>About Us</div>
					<div>Contact</div>
					<div>Privacy</div>
				</div>
				<div>
					© 2024 Nebula Digital | All Rights Reserved
				</div>
				</div>					
		</>
	);
}

export default Home;
