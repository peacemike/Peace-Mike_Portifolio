import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/smartpark.jpg";
import project2 from "@/assets/biomed.jpg";
import project3 from "@/assets/traffic.jpg";
import project4 from "@/assets/hcontrol.jpg.png";

const projects = [
	{
		id: 1,
		title: "BioMed Management System",
		description:
			"A system for biomedical teams to track medical equipment, manage inventory, conduct equipment studies, and compose invoices for hospitals.",
		image: project2,
		tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
		github: "https://github.com/peacemike",
		demo: "https://example.com",
		featured: true,
	},
	{
		id: 2,
		title: "Home control System",
		description:
			"IoT dashboard for smart home automation with real-time sensor monitoring, automated controls, and machine learning predictions for energy optimization.",
		image: project4,
		tags: ["IoT", "Python", "React", "arduino", "ESP32"],
		github: "https://github.com/peacemike",
		demo: "https://example.com",
		featured: true,
	},
	{
		id: 3,
		title: "SmartPark Repair management system",
		description:
			"A car repair management system designed to help garages efficiently manage and control all aspects of their operations, from repair tracking to customer communication and inventory management.",
		image: project1,
		tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
		github: "https://github.com/peacemike",
		demo: "https://example.com",
		featured: false,
	},
	{
		id: 4,
		title: "Traffic Management System",
		description:
			"A smart traffic management platform utilizing IoT sensors and real-time analytics to optimize traffic flow, reduce congestion, and improve urban mobility.",
		image: project3,
		tags: ["IoT", "Analytics", "React", "Node.js"],
		github: "https://github.com/peacemike",
		demo: "https://example.com",
		featured: false,
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-20 px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 animate-fade-up">
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						Featured Projects
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						A selection of projects that showcase my expertise in full-stack
						development, IoT solutions, and modern web technologies.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<Card
							key={project.id}
							className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="relative overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
								/>
								{project.featured && (
									<Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
										Featured
									</Badge>
								)}

								{/* Overlay on hover */}
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
									<Button size="sm" variant="secondary" asChild>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="w-4 h-4 mr-2" />
											Code
										</a>
									</Button>
									<Button size="sm" variant="default" asChild>
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
										>
											<ExternalLink className="w-4 h-4 mr-2" />
											Demo
										</a>
									</Button>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
									{project.title}
								</h3>

								<p className="text-muted-foreground mb-4 line-clamp-3">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag) => (
										<Badge key={tag} variant="secondary" className="text-xs">
											{tag}
										</Badge>
									))}
								</div>
							</div>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Button variant="outline" size="lg" className="group">
						View All Projects
						<ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Projects;