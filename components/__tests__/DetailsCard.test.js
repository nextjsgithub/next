import React from 'react';
import { render } from 'enzyme';
import DetailsCard from '../DetailsCard/DetailsCard';

let wrapper;

const edges = [JSON.parse(`{
  "__typename": "SearchResultItemEdge",
  "node": {
    "__typename": "Repository",
    "id": "MDEwOlJlcG9zaXRvcnkxMzcwNzg0ODc=",
    "name": "vue-next",
    "description": "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
    "url": "https://github.com/vuejs/vue-next",
    "owner": {
      "__typename": "Organization",
      "login": "vuejs"
    },
    "object": {
      "__typename": "Commit",
      "id": "MDY6Q29tbWl0MTM3MDc4NDg3OjQ3ZGE5MjE0NmM5ZmIzZmE2YjFlMjUwZTA2NGNhNDliNzRkODE1ZTQ=",
      "history": {
        "__typename": "CommitHistoryConnection",
        "edges": [
          {
            "__typename": "CommitEdge",
            "node": {
              "__typename": "Commit",
              "id": "MDY6Q29tbWl0MTM3MDc4NDg3OjQ3ZGE5MjE0NmM5ZmIzZmE2YjFlMjUwZTA2NGNhNDliNzRkODE1ZTQ=",
              "author": {
                "__typename": "GitActor",
                "name": "HcySunYang"
              },
              "message": "fix(compiler-core): fix whitespace management for slots with whitespace: 'preserve' (#3767)\\n\\nfix #3766"
            }
          },
          {
            "__typename": "CommitEdge",
            "node": {
              "__typename": "Commit",
              "id": "MDY6Q29tbWl0MTM3MDc4NDg3OmYzZDMwMzYzZWMzM2NlNmI2MjBmNjdlNGNiOGRiZjhiODZjZWY1ODM=",
              "author": {
                "__typename": "GitActor",
                "name": "Zen"
              },
              "message": "chore: bump api-extractor from 7.12.1 to 7.15.1 (#3745)"
            }
          },
          {
            "__typename": "CommitEdge",
            "node": {
              "__typename": "Commit",
              "id": "MDY6Q29tbWl0MTM3MDc4NDg3OjQ5ZmQxNjk2YzkzMTEwODNhN2E4N2RhZmU5ZDAwOTg4MzI4NGVmM2M=",
              "author": {
                "__typename": "GitActor",
                "name": "Yunfei He"
              },
              "message": "chore(types): remove unnecessary type assertion (#3724)"
            }
          },
          {
            "__typename": "CommitEdge",
            "node": {
              "__typename": "Commit",
              "id": "MDY6Q29tbWl0MTM3MDc4NDg3OjliMTYwYjk0MDU1NWFiYjZiNmNlNzIyZmRkYmQ5NjQ5ZWUxOTZmN2I=",
              "author": {
                "__typename": "GitActor",
                "name": "GU Yiling"
              },
              "message": "fix(types): declared prop keys should always exist in \`props\` argument (#3726)"
            }
          }
        ]
      }
    }
  }
}`)]

beforeEach(() => {
  wrapper = render(<DetailsCard edges={edges} showDetails={0} />);
});

describe('<DetailsCard /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
