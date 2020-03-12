import * as types from "../types/quotesTypes";
import axios from "axios";

import { normalize, schema } from "normalizr";

const user = new schema.Entity(
  "persons",
  {},
  {
    idAttribute: "_id"
  }
);

const comment = new schema.Entity("comments", {
  commenter: user
});

const article = new schema.Entity("articles", {
  comments: [comment],
  author: user
});

const normalizeData = data => normalize(data, [article]);

const rawData = [
  {
    id: "5e614556ca716276856f10a5",
    title: "duis ex ea",
    author: {
      _id: "5e6145569dd0c10637a7d2c6",
      name: "Rose Mason"
    },
    comments: [
      {
        id: "5e614556ffd421d788656131",
        content:
          "Enim ad veniam reprehenderit culpa consequat pariatur ex eiusmod Lorem incididunt ut. Dolor magna consectetur nulla mollit pariatur sit veniam mollit laborum sint sunt deserunt aute. Dolore laborum voluptate elit est ullamco sint proident exercitation enim. Aute adipisicing do aliquip laborum non labore id ad. Est laboris eu veniam nulla velit.\r\n",
        commenter: {
          _id: "5e6145561513154a40583e09",
          name: "Simpson Ayers"
        }
      },
      {
        id: "5e614556bff7c3389c54ca35",
        content:
          "Laborum amet esse nulla minim eu. Duis fugiat minim proident nulla officia ex reprehenderit incididunt elit qui deserunt proident pariatur. Reprehenderit labore esse tempor consectetur velit irure nulla adipisicing. Sit exercitation est sint elit sint exercitation non quis in deserunt magna. Minim culpa mollit mollit velit enim.\r\n",
        commenter: {
          _id: "5e6145565647a1dc5d20b0e3",
          name: "Schmidt Robbins"
        }
      },
      {
        id: "5e614556beb23da0569135f5",
        content:
          "Est ullamco veniam mollit excepteur voluptate eiusmod consectetur velit est aliqua. Id qui dolor nisi veniam consectetur nulla ad ad consequat aliqua cupidatat. Est consectetur enim magna deserunt veniam mollit est quis anim sunt ullamco exercitation ea magna. Labore aliqua exercitation adipisicing Lorem aute cupidatat eu. Sint ea ipsum cillum mollit officia tempor sit id.\r\n",
        commenter: {
          _id: "5e614556687704215f8041bf",
          name: "Best Vinson"
        }
      },
      {
        id: "5e6145563ec2c02206448df2",
        content:
          "Cupidatat anim occaecat labore anim reprehenderit quis enim voluptate duis velit. Non ad minim reprehenderit do nulla laboris ea nostrud in irure. Eiusmod ut nulla sunt eu tempor qui irure eu esse et veniam aliquip do ad.\r\n",
        commenter: {
          _id: "5e6145569b691869e8c597e0",
          name: "Dorothy Hicks"
        }
      },
      {
        id: "5e614556ac2d4b12953cf324",
        content:
          "Do aute minim non eu nostrud irure eiusmod excepteur ea excepteur. Deserunt ex elit mollit amet laboris eu enim aliqua consequat proident Lorem cillum nisi. Exercitation dolor quis officia culpa. Elit Lorem irure enim deserunt sit ex ad occaecat deserunt mollit veniam aliquip sunt quis. Eu culpa velit adipisicing consectetur adipisicing eu commodo occaecat. Culpa laborum consectetur anim Lorem do. Cupidatat dolor consectetur minim labore irure adipisicing eu amet laboris nulla nostrud.\r\n",
        commenter: {
          _id: "5e61455643e8df231340e1d8",
          name: "Donna Schmidt"
        }
      }
    ]
  },
  {
    id: "5e614556177151ae1884af3d",
    title: "proident consectetur consectetur",
    author: {
      _id: "5e6145565cf2e49eaa87a912",
      name: "Selma Dillon"
    },
    comments: [
      {
        id: "5e614556dfd951648d8adf71",
        content:
          "Officia occaecat officia ullamco occaecat qui et magna fugiat dolor pariatur mollit culpa. In elit labore magna reprehenderit commodo sunt sunt laboris qui. Minim dolor commodo cillum mollit. Consectetur nulla do do culpa quis incididunt in cillum labore minim.\r\n",
        commenter: {
          _id: "5e6145566d17be2d6b70a169",
          name: "Johns Malone"
        }
      },
      {
        id: "5e6145561bf5883a4a249a73",
        content:
          "Elit magna veniam et qui enim sit enim tempor voluptate. Id duis anim sunt amet labore. Velit consequat quis aute in ex magna do.\r\n",
        commenter: {
          _id: "5e614556ca71975dba544f16",
          name: "Roxie Palmer"
        }
      },
      {
        id: "5e614556e06852a06723769b",
        content:
          "Nulla est proident duis anim Lorem cupidatat occaecat consequat eu cillum irure cillum ipsum. Ex nostrud officia enim nisi. Quis dolore eu nulla id esse laboris et.\r\n",
        commenter: {
          _id: "5e61455641c5769d49ea7f3f",
          name: "Rosetta Humphrey"
        }
      },
      {
        id: "5e614556d10cb7e795656e42",
        content:
          "Anim laboris sunt ut consequat dolore Lorem labore cillum sint fugiat laborum exercitation veniam. Veniam consequat sit ipsum adipisicing et tempor reprehenderit non. Eu sunt cupidatat velit occaecat aute deserunt nisi occaecat officia do dolore magna magna et.\r\n",
        commenter: {
          _id: "5e61455623879643a8e3a0c7",
          name: "Gregory Underwood"
        }
      },
      {
        id: "5e614556a84149a91f724531",
        content:
          "Amet nostrud voluptate excepteur id. Tempor in ipsum est duis consectetur dolor adipisicing exercitation proident nulla ad enim enim. Nostrud minim est sunt cillum elit ea elit esse occaecat proident eiusmod fugiat duis. Ex ullamco reprehenderit Lorem sit ea enim. Excepteur nostrud nulla exercitation esse incididunt velit sunt in Lorem eu aliqua nostrud aliquip. Aliquip reprehenderit velit voluptate magna eu. Consectetur dolor duis nisi anim duis laborum ex dolore qui.\r\n",
        commenter: {
          _id: "5e6145565576507b32a9be04",
          name: "Francine Wallace"
        }
      }
    ]
  },
  {
    id: "5e614556069bb9b90f892f18",
    title: "duis elit amet",
    author: {
      _id: "5e614556ee9173929a6da8f7",
      name: "Burks Mcmahon"
    },
    comments: [
      {
        id: "5e61455643f794613367954f",
        content:
          "Velit elit proident cillum nulla dolore sint ut in fugiat commodo et. Voluptate duis eiusmod ea Lorem laboris ex cupidatat exercitation et ullamco duis cupidatat enim commodo. Ad excepteur aute culpa ea eiusmod ipsum pariatur est enim eiusmod anim nostrud. Amet qui nulla aliqua deserunt nostrud elit magna qui mollit dolor veniam in Lorem. Anim deserunt duis tempor occaecat do aliqua.\r\n",
        commenter: {
          _id: "5e614556d3c8c5323f342c77",
          name: "Christie Meadows"
        }
      },
      {
        id: "5e614556f1659d433d2ea620",
        content:
          "Exercitation tempor in minim aliqua in et proident aute deserunt sint anim. Mollit duis voluptate nostrud dolore irure aliqua cillum sit voluptate proident pariatur. Eu labore amet sit mollit aute ex aliqua mollit veniam do officia irure. Minim irure ea et est laborum elit elit ex eiusmod eu dolore. Tempor excepteur qui anim velit consequat. Est officia consequat elit culpa sit ullamco non minim. Adipisicing pariatur incididunt nisi officia non tempor tempor.\r\n",
        commenter: {
          _id: "5e614556c0446617986c5ada",
          name: "Robinson Dodson"
        }
      },
      {
        id: "5e614556c1f3c35ca8cc0860",
        content:
          "Magna qui amet qui labore ipsum voluptate irure sit. Dolor magna ea velit occaecat qui aute exercitation Lorem amet eu consectetur nulla elit. Incididunt mollit officia incididunt veniam.\r\n",
        commenter: {
          _id: "5e6145560ba21c652837ad09",
          name: "Dalton Hahn"
        }
      },
      {
        id: "5e6145562b56b8d245dfbbe4",
        content:
          "Commodo est enim pariatur pariatur pariatur nulla qui. Veniam nisi do aliquip ut adipisicing sunt aliqua. Nulla et nisi officia cupidatat magna excepteur irure. In esse nisi do duis minim non. Ipsum labore amet occaecat enim incididunt id duis fugiat fugiat elit.\r\n",
        commenter: {
          _id: "5e6145562bf9d6768eb1242a",
          name: "Lina Clarke"
        }
      },
      {
        id: "5e61455660877ec50271a22f",
        content:
          "Ipsum excepteur ipsum deserunt adipisicing ullamco. Deserunt aliqua id commodo minim ea. Officia cupidatat velit laborum tempor ea.\r\n",
        commenter: {
          _id: "5e6145565486ef7716c79604",
          name: "Wise Moss"
        }
      },
      {
        id: "5e6145567d3357e7707ebbeb",
        content:
          "Fugiat non anim ex et amet do esse enim pariatur aliquip mollit aliquip nostrud magna. Pariatur ipsum amet qui quis. Adipisicing occaecat aliquip ut sunt. Eiusmod duis deserunt eiusmod et ad laborum incididunt irure. Ipsum pariatur culpa commodo cupidatat veniam pariatur do ad dolore. Do aute mollit qui anim exercitation dolor cillum esse Lorem ex culpa. Ex veniam qui voluptate nisi qui reprehenderit cupidatat incididunt ex esse aliqua non eiusmod.\r\n",
        commenter: {
          _id: "5e614556ac74fae2e8810b03",
          name: "Chambers Oneal"
        }
      },
      {
        id: "5e6145569f07cbc4c884a6fc",
        content:
          "Labore in ex Lorem elit magna quis cillum voluptate sit sit. Eiusmod labore sunt eu commodo ipsum sit do. Non aliquip est nostrud enim tempor ipsum mollit commodo nostrud irure eu nisi officia.\r\n",
        commenter: {
          _id: "5e614556f409b8fe0d03c9cf",
          name: "Romero Yang"
        }
      }
    ]
  },
  {
    id: "5e61455651607baa079ce44e",
    title: "dolore eiusmod esse",
    author: {
      _id: "5e614556f1bc76e8920155f9",
      name: "Jenny Ballard"
    },
    comments: [
      {
        id: "5e614556b2167b4c1bd1abdb",
        content:
          "Ullamco mollit Lorem duis in consequat commodo ut ad id quis eu laborum ullamco. Veniam fugiat aliqua esse Lorem tempor laboris nisi irure aliqua pariatur do. Cupidatat incididunt sunt minim veniam laboris. Eiusmod ea amet aliquip velit incididunt.\r\n",
        commenter: {
          _id: "5e6145562a4dc3b38bda7916",
          name: "Anastasia Barnes"
        }
      },
      {
        id: "5e614556cb1d9020cdea5384",
        content:
          "Ad eu duis non do aute sint consequat laboris tempor exercitation aliqua et anim voluptate. Ipsum cupidatat laboris incididunt in nisi nulla aute ullamco. Ipsum dolore non amet dolore irure minim id minim. Cillum do commodo minim irure qui elit aute do eu nostrud dolor reprehenderit ad dolore. Dolor dolore laboris sit do pariatur pariatur excepteur nulla. Ex voluptate nostrud enim proident culpa esse dolore dolor nostrud ea fugiat nulla nisi quis.\r\n",
        commenter: {
          _id: "5e6145566a09c9fcc3ccf2d5",
          name: "Annie Macias"
        }
      },
      {
        id: "5e6145565bd4a25014037f96",
        content:
          "Dolore qui aliquip non deserunt pariatur sit ad sint mollit fugiat anim. Ex ut fugiat et cillum ad dolore sunt quis. Nulla dolor qui deserunt veniam ipsum labore esse nisi est. Est dolor et labore ipsum et voluptate ea proident qui anim eu qui. Enim commodo officia magna excepteur. Ipsum occaecat cillum ad ullamco quis ullamco sunt laborum. Nostrud sit sit proident proident ea.\r\n",
        commenter: {
          _id: "5e61455671dda3f89131f827",
          name: "French Atkins"
        }
      },
      {
        id: "5e614556d002cd908186cb54",
        content:
          "Do enim consequat elit enim aliquip irure voluptate consequat elit tempor. Ad consectetur laborum proident quis aliquip nisi aliqua commodo ea cupidatat. Anim est enim adipisicing ipsum dolore proident in. Duis labore proident enim cupidatat irure veniam nisi minim cupidatat excepteur deserunt mollit exercitation laboris.\r\n",
        commenter: {
          _id: "5e6145567764c093d048a8c6",
          name: "Burgess Hutchinson"
        }
      },
      {
        id: "5e614556a3f7706c2cd886b2",
        content:
          "Ipsum et aliquip in sunt qui laboris fugiat Lorem laborum ad ut. Labore officia cillum aliqua ex in aute nostrud tempor ipsum commodo. Ex do minim dolore nostrud tempor laborum Lorem consequat exercitation aliqua elit dolore est. Pariatur reprehenderit eiusmod voluptate exercitation ea ea quis dolore officia et aliquip incididunt magna dolore. Velit velit consequat laboris sit aliqua est anim ex nulla irure cupidatat sint cillum. Sunt pariatur enim aliqua culpa incididunt proident commodo id excepteur enim consectetur laborum do ut.\r\n",
        commenter: {
          _id: "5e614556ec7874f0078ffaec",
          name: "Burns Waller"
        }
      },
      {
        id: "5e614556fa339cf9f145902d",
        content:
          "Excepteur culpa elit consequat veniam officia in sit ullamco enim anim. Eu amet deserunt amet labore consequat culpa aute mollit eiusmod deserunt amet ad non mollit. Commodo veniam aliquip occaecat incididunt fugiat quis Lorem minim adipisicing occaecat non ea. Ad ea anim excepteur ullamco sint esse ut irure incididunt excepteur esse.\r\n",
        commenter: {
          _id: "5e6145569c037d5211b0b9cf",
          name: "Rosalinda Cunningham"
        }
      },
      {
        id: "5e6145569530f15032c2d4fc",
        content:
          "Sit deserunt qui in non amet ea officia. Occaecat eiusmod laboris magna eu qui aute dolore id. Dolore elit aute cupidatat id proident. Duis enim velit laborum est laboris. Proident elit nostrud velit aliquip et ut cillum aliquip veniam aliqua culpa tempor ipsum. Ipsum mollit cillum pariatur labore nisi ullamco amet adipisicing elit.\r\n",
        commenter: {
          _id: "5e614556e98e31ba931175fe",
          name: "Giles Mooney"
        }
      }
    ]
  },
  {
    id: "5e6145564888ea8ab9547f67",
    title: "adipisicing nulla enim",
    author: {
      _id: "5e61455633f4d8e2e1bbeeac",
      name: "Lara Benjamin"
    },
    comments: [
      {
        id: "5e614556af6fee93c7f7b860",
        content:
          "Est amet nostrud consectetur amet. Mollit enim commodo aliquip commodo ea aute aute in fugiat. Incididunt et sunt enim quis minim amet. Consequat incididunt proident sunt elit officia magna eiusmod dolore ex. Laboris eu duis ex fugiat tempor sint.\r\n",
        commenter: {
          _id: "5e614556ec40d83624fcba81",
          name: "Key Rose"
        }
      },
      {
        id: "5e6145563ec1a4265fb3a8ae",
        content:
          "Commodo culpa ea et nostrud qui non. Dolore dolore nostrud cupidatat commodo non. Lorem occaecat velit deserunt cillum dolore nostrud sunt id cillum.\r\n",
        commenter: {
          _id: "5e61455665f5f4776884b484",
          name: "Burnett Kirk"
        }
      },
      {
        id: "5e614556ea4bc5f14d08cbf9",
        content:
          "Velit cillum aliquip tempor sit pariatur ad excepteur enim. Officia eu commodo amet sint ut ipsum nostrud aliquip adipisicing veniam consectetur exercitation. Lorem consequat consectetur incididunt commodo consectetur nulla exercitation nulla deserunt amet tempor nulla fugiat. Sunt ad elit enim in et labore nostrud. Nostrud aliquip commodo excepteur magna duis amet sit laboris ipsum ea aliqua anim amet est. Cillum sunt reprehenderit exercitation aute eu duis sunt magna ea deserunt fugiat sit aute ea. Laboris elit pariatur deserunt labore aute eiusmod adipisicing ipsum officia pariatur laboris.\r\n",
        commenter: {
          _id: "5e6145565ecaada864a7edaa",
          name: "Mollie Olsen"
        }
      },
      {
        id: "5e614556dcfae2abd252a2cf",
        content:
          "Id aliquip culpa laborum ipsum sit cillum quis elit. Laboris ut quis nulla nisi in pariatur sunt ad cupidatat cupidatat. Commodo nulla laborum aliquip sint nisi occaecat dolor. Lorem enim ipsum officia elit commodo deserunt eiusmod velit dolore et.\r\n",
        commenter: {
          _id: "5e6145566fddf6ff3f1504e2",
          name: "Belinda Maldonado"
        }
      },
      {
        id: "5e6145561b176b9d77f4a554",
        content:
          "Adipisicing est nisi irure deserunt irure Lorem ex ad deserunt enim non commodo consectetur. Nulla est do est minim esse veniam esse magna. Commodo qui proident reprehenderit ullamco. Minim proident mollit quis adipisicing sit adipisicing non. Nulla id aute elit consectetur id enim.\r\n",
        commenter: {
          _id: "5e61455624ef0c4bd9815e0f",
          name: "Shaffer Howe"
        }
      },
      {
        id: "5e61455651009a2644a16320",
        content:
          "Lorem commodo laboris adipisicing ut. Dolor velit sint sit duis sit ea in nisi incididunt cupidatat et. Esse commodo mollit consequat voluptate do exercitation. Occaecat ut consequat reprehenderit occaecat consequat magna excepteur irure minim et enim. Ex est irure ad velit. Et irure eu veniam eiusmod dolore duis aliquip voluptate. Sit mollit sunt esse commodo nulla exercitation est sint nisi elit nulla cillum deserunt.\r\n",
        commenter: {
          _id: "5e614556d25f3b66ce2321d6",
          name: "Rosemarie Christensen"
        }
      },
      {
        id: "5e614556b56ce52cebefd682",
        content:
          "Eiusmod ut dolore eiusmod ullamco ut do cupidatat commodo et dolor fugiat non in non. Et Lorem velit aliquip aute cupidatat nisi incididunt commodo veniam do in sit. Adipisicing voluptate tempor exercitation ad irure. Ut dolor cillum duis do consectetur cillum magna eu aliqua eiusmod ullamco. Adipisicing et nostrud amet irure enim ea cupidatat tempor proident qui. Cillum nisi pariatur fugiat est do laborum reprehenderit non cupidatat labore ullamco nisi nulla.\r\n",
        commenter: {
          _id: "5e614556dfc8aec2b0661c6e",
          name: "Wendi Huff"
        }
      }
    ]
  }
];

export const loadQuotes = quotes => ({
  type: types.LOAD_QUOTES,
  quotes
});

export const updateSortedQuotes = sortedQuotes => ({
  type: types.UPDATE_SORTED_QUOTES,
  sortedQuotes
});
export const changeActualPage = actualPage => ({
  type: types.CHANGE_ACTUAL_PAGE,
  actualPage
});
export const deleteQuoteInState = quoteId => ({
  type: types.DELETE_QUOTE_STATE,
  quoteId
});
export const deleteQuoteInApi = quoteId => ({
  type: types.DELETE_QUOTE_API,
  quoteId
});

export const changeFilterQuery = query => ({
  type: types.CHANGE_FILTER_QUERY,
  query
});
export const updatePageSize = pageSize => ({
  type: types.UPDATE_PAGE_SIZE,
  pageSize
});
export const changeSortOrder = order => ({
  type: types.CHANGE_SORT_ORDER,
  order
});
export const changeSortBy = orderBy => ({
  type: types.CHANGE_SORT_BY,
  orderBy
});

export const updateQuotes = api => dispatch => {
  axios
    .get(api + "/quotes/all")
    // .then(response => dispatch(loadQuotes(normalizeData(response.data))))
    .then(response => dispatch(loadQuotes(normalizeData(rawData))))
    // .then(response => dispatch(loadQuotes(response.data)))
    .catch(err => {});
};

export const deleteQuote = (api, quote, token) => dispatch => {
  let check = window.confirm("Are You sure to delete this quote ?");
  if (check === true) {
    const url = api + "/quotes/delete";
    const content = {
      id: quote
    };
    axios
      .delete(url, {
        headers: {
          "content-type": "application/json",
          Authorization: token
        },
        data: content
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(deleteQuoteInState(quote));
        }
      })
      .catch(error => {
        alert(error.response.data);
      });
  }
};

export const changeSorting = (byElem, oldElem, curSorting) => dispatch => {
  if (byElem === oldElem) {
    const newSortOrder = curSorting === "ASC" ? "DESC" : "ASC";
    dispatch(changeSortOrder(newSortOrder));
  } else {
    dispatch(changeSortBy(byElem));
    dispatch(changeSortOrder("ASC"));
  }
};

export const changeFilter = filterQuery => dispatch => {
  dispatch(changeFilterQuery(filterQuery));
};

export const changeSortedQuotes = quotes => dispatch => {
  dispatch(updateSortedQuotes(quotes));
};

export const changePageSize = pageSize => dispatch => {
  dispatch(updatePageSize(pageSize));
};
export const removeAllQuotes = () => dispatch => {
  dispatch(loadQuotes([]));
  dispatch(updateSortedQuotes([]));
};
