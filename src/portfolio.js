const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://jerryxing.com',
  title: 'Jerry Xing',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Jerry Xing',
  role: 'backend software engineer',
  description:
  'I bring past startup experience working on product and platform teams. I specialize in API development, building scalable backend services, and distributed system architectures, with expertise in Java, Python, and Go.',
  resume: '/Jerry_Xing_Resume.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/jerryxing',
    github: 'https://github.com/jry0',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Personal Key-Value Store',
    description:
      'A key-value server with sample CLI client implementation and configurable snapshotting / AOF for data persistence.',
      stack: ['Go', 'gRPC', 'protobufs'],
    sourceCode: 'https://github.com/jry0/personal-kv-store',
    /// livePreview: 'https://github.com', 

  },
  {
    name: 'Pixel Canvas',
    description:
      'One million shared and editable pixels. Inspired by Reddit\'s r/place.',
    stack: ['personal-kv-store', 'Python', 'FastAPI', 'Websockets'],
    sourceCode: 'https://github.com/jry0/shared-pixel-canvas',
    livePreview: 'https://github.com/jry0/shared-pixel-canvas',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Python',
  'Go',
  'REST APIs',
  'gRPC',
  'SQL',
  'NoSQL',
  
  'Redis',
  'Elasticsearch',
  'RabbitMQ',
  'Distributed Systems',
  'Docker',
  'Kubernetes',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'j27xing@uwaterloo.ca',
}

export { header, about, projects, skills, contact }
