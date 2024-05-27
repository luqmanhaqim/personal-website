export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/351111835/original/73dcba53c9cbea624a6182203faf3974ae473cb7/automate-your-aws-tasks-with-python-scripts.png",
      name: "Cloud Automation",
      description: "Focusing extensively on implementing automation solutions hosted on AWS Cloud. My work involves leveraging AWS services to streamline and optimize various DevOps processes, ensuring efficiency, scalability, and reliability in cloud-based environments"
    },
    {
      id: 2,
      image: "https://techvify-software.com/wp-content/uploads/2023/12/devsecops-define.jpg",
      name: "DevSecOps",
      description: "Dedicated to implementing DevSecOps practices, a philosophy that integrates security practices within the DevOps process"
    }
  ];
  res.status(200).json(data);
};
