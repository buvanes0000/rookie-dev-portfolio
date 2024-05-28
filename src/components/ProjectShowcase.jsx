import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const ProjectCard = styled.div`
  position: relative;
  width: 300px;
  margin: 20px;
  perspective: 1000px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ImageCard = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background: url(${props => props.image}) center/cover no-repeat;
  border-radius: 8px;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;

  &:hover {
    transform: translateY(-10px);
  }
`;

const InfoCard = styled.div`
  position: absolute;
  top: 180px;
  width: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  text-align: center;
`;

const ProjectTitle = styled.h2`
  margin: 0;
  font-size: 1.5em;
  color: #333;
`;

const ProjectDetails = styled.div`
  display: none;
  margin-top: 20px;
  text-align: left;

  ${ImageCard}:hover + & {
    display: block;
  }
`;

const ProjectDescription = styled.p`
  margin: 10px 0;
`;

const ProjectSoftware = styled.ul`
  margin: 10px 0;
  padding: 0;
  list-style-type: none;
`;

const ProjectSoftwareItem = styled.li`
  margin: 5px 0;
`;

const ProjectShowcase = ({ projects }) => {
  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ImageCard image={project.image} />
          <InfoCard>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDetails>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectSoftware>
                {project.software.map((soft, idx) => (
                  <ProjectSoftwareItem key={idx}>{soft}</ProjectSoftwareItem>
                ))}
              </ProjectSoftware>
            </ProjectDetails>
          </InfoCard>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default ProjectShowcase;
