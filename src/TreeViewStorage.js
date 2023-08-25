import React, {useEffect, useState} from "react";

import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import {Button, Checkbox, FormControlLabel, Paper, Stack} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TreeViewStorage = () => {
    const [treeData, setTreeData] = useState([]);
    const [checked, setChecked] = useState({});
    const [indeterminate, setIndeterminate] = useState({});

    useEffect(() => {
        setTimeout(() => {
            const jsonData = [
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_root",
                    "displayOrder": 384.0,
                    "id": "UMRW_KMI_1",
                    "intId": 29365,
                    "version": 1642718,
                    "countOfItems": 38,
                    "names": {
                        "LA_eng_US": "KMI"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_TEST_APT_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_APT_REVIEW1_1",
                    "intId": 48508,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "APT_Review1"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 1024.0,
                    "id": "UMRW_PP_SOLUTION_1",
                    "intId": 48495,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "PP-Solution"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_TEST_APT_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_BT_SERVICEIT_1",
                    "intId": 295946,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BT_ServiceIT"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_1_BEU_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_BEU_IP_KNOWLEDGECOORDINATOR_1",
                    "intId": 300708,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BEU_IP_Knowledge Coordinator"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 1152.0,
                    "id": "UMRW_UKT_1",
                    "intId": 29371,
                    "version": 1642718,
                    "countOfItems": 2,
                    "names": {
                        "LA_eng_US": "UKT"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_OP_APP_DRIVER_1",
                    "intId": 48491,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-App/Driver"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_1_BEU_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_BEU_DEVELOPMENT_KNOWLEDGECOORDINATOR_1",
                    "intId": 300709,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BEU_Development_Knowledge Coordinator"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 896.0,
                    "id": "UMRW_BGR_1",
                    "intId": 300734,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BGR"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 1024.0,
                    "id": "UMRW_TECH_T_1",
                    "intId": 29372,
                    "version": 1642718,
                    "countOfItems": 2,
                    "names": {
                        "LA_jpn_JP": "Tech-T",
                        "LA_eng_US": "Tech-T"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        },
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_jpn_JP"
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 768.0,
                    "id": "UMRW_DL_ITAMI_ALL_X__1",
                    "intId": 301029,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Itami-ALL-X)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_DWS_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_DWS_WPH_1",
                    "intId": 48497,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DWS-WPH"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_OP_HARDWARE_TL__1",
                    "intId": 300556,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-Hardware (TL)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 768.0,
                    "id": "UMRW_BGB_1",
                    "intId": 300716,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BGB"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 896.0,
                    "id": "UMRW_PP_ENGINE_OPTION_1",
                    "intId": 48496,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "PP-Engine&Option"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "displayOrder": 0.0,
                    "id": "UMRW_root",
                    "intId": 29357,
                    "version": 1642718,
                    "countOfItems": 76,
                    "names": {
                        "LA_jpn_JP": "レビューグループ",
                        "LA_eng_US": "Review Group"
                    },
                    "attributes": [
                        {
                            "name": "sortOrder",
                            "value": "Alphabetical",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_DL_ITAMI__1",
                    "intId": 48480,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Itami)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_SSE_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_WWRSPF_1",
                    "intId": 300505,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "WWRSPF"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_TEST_APT_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_APT_REVIEW3_1",
                    "intId": 82149,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "APT_Review3"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_root",
                    "displayOrder": 640.0,
                    "id": "UMRW_TEST_APT_1",
                    "intId": 48507,
                    "version": 1642718,
                    "countOfItems": 4,
                    "names": {
                        "LA_eng_US": "Test_APT"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 640.0,
                    "id": "UMRW_BFI_1",
                    "intId": 300715,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BFI"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMJ_1",
                    "displayOrder": 640.0,
                    "id": "UMRW_SUPPORT_ALL_1",
                    "intId": 300836,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "Support-ALL"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 2048.0,
                    "id": "UMRW_BUA_1",
                    "intId": 300725,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BUA"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 896.0,
                    "id": "UMRW_DL_PP__1",
                    "intId": 48481,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(PP)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_OP_HARDWARE_1",
                    "intId": 48494,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-Hardware"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1536.0,
                    "id": "UMRW_BRS_1",
                    "intId": 300721,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BRS"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_EXPERT_1",
                    "intId": 29373,
                    "version": 1642718,
                    "countOfItems": 8,
                    "names": {
                        "LA_eng_US": "Expert"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_DWS_1",
                    "intId": 48485,
                    "version": 1642718,
                    "countOfItems": 2,
                    "names": {
                        "LA_eng_US": "DWS"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1024.0,
                    "id": "UMRW_BHR_1",
                    "intId": 300717,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BHR"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1152.0,
                    "id": "UMRW_BNO_1",
                    "intId": 300718,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BNO"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 640.0,
                    "id": "UMRW_RELEASE_1",
                    "intId": 48477,
                    "version": 1642718,
                    "countOfItems": 9,
                    "names": {
                        "LA_eng_US": "Release"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1920.0,
                    "id": "UMRW_BTR_1",
                    "intId": 300724,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BTR"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_1_BEU_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_BEU_EG_1",
                    "intId": 300711,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BEU_EG"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_SSE_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_FLEETRMM_1",
                    "intId": 301225,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "FleetRMM"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_IP_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_MGI_G_1",
                    "intId": 301171,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "MGI-G"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1280.0,
                    "id": "UMRW_BPL_1",
                    "intId": 300719,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BPL"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1408.0,
                    "id": "UMRW_BRO_1",
                    "intId": 300720,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BRO"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_1_BEU_1",
                    "intId": 300705,
                    "version": 1642718,
                    "countOfItems": 6,
                    "names": {
                        "LA_eng_US": "1-BEU"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_1_BEU_1",
                    "displayOrder": 768.0,
                    "id": "UMRW_BEU_OP_KNOWLEDGECOORDINATOR_1",
                    "intId": 300706,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BEU_OP_Knowledge Coordinator"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_DL_ITAMI_ALL_2__1",
                    "intId": 301027,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Itami-ALL-2)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_IP_1",
                    "intId": 301170,
                    "version": 1642718,
                    "countOfItems": 2,
                    "names": {
                        "LA_eng_US": "IP"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_SSE_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_CSRC_1",
                    "intId": 300503,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "CSRC"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_1_BEU_1",
                    "displayOrder": 640.0,
                    "id": "UMRW_BEU_ITS_WPH_KNOWLEDGECOORDINATOR_1",
                    "intId": 300710,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BEU_ITS/WPH_Knowledge Coordinator"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_DL_ALL__1",
                    "intId": 48478,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(ALL)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_UKT_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_USER_PP_1",
                    "intId": 48486,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "User-PP"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_TECH_T_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_TECH_PP_1",
                    "intId": 48488,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "Tech-PP"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1792.0,
                    "id": "UMRW_BSW_1",
                    "intId": 300723,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BSW"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_root",
                    "displayOrder": 512.0,
                    "id": "UMRW_KMJ_1",
                    "intId": 48475,
                    "version": 1642718,
                    "countOfItems": 5,
                    "names": {
                        "LA_eng_US": "KMJ"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_root",
                    "displayOrder": 256.0,
                    "id": "UMRW_HEALTHCARE_1",
                    "intId": 301214,
                    "version": 1642718,
                    "countOfItems": 1,
                    "names": {
                        "LA_eng_US": "HC"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_DL_ITAMI_ALL__1",
                    "intId": 48483,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Itami-ALL)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 1664.0,
                    "id": "UMRW_BSK_1",
                    "intId": 300722,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BSK"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_HEALTHCARE_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_HEALTHCARE_2",
                    "intId": 301215,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "Healthcare"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 2176.0,
                    "id": "UMRW_BUR_1",
                    "intId": 300726,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BUR"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_IP_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_LFP_G_1",
                    "intId": 301295,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "LFP-G"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_HD_1",
                    "intId": 29369,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "HD"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 896.0,
                    "id": "UMRW_SUPPORTST_1",
                    "intId": 48484,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "Support St"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 640.0,
                    "id": "UMRW_DL_ITAMI_ALL_3__1",
                    "intId": 301028,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Itami-ALL-3)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMI_1",
                    "displayOrder": 768.0,
                    "id": "UMRW_SSE_1",
                    "intId": 300502,
                    "version": 1642718,
                    "countOfItems": 4,
                    "names": {
                        "LA_eng_US": "SSE"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_TEST_APT_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_APT_REVIEW2_1",
                    "intId": 82148,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "APT_Review2"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_OP_ARCHITECT_1",
                    "intId": 48492,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-Architect"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_1_BEU_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_BEU_CP_KNOWLEDGECOORDINATOR_1",
                    "intId": 300707,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BEU_CP_Knowledge Coordinator"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 1152.0,
                    "id": "UMRW_DL_TOYOKAWA_ALL__1",
                    "intId": 48482,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Toyokawa-ALL)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_UKT_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_USER_OP_1",
                    "intId": 48487,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "User-OP"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMJ_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_OP_SUPPORT_1",
                    "intId": 300834,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-Support"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_BBL_1",
                    "intId": 300712,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BBL"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_TECH_T_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_TECH_OP_1",
                    "intId": 48489,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "Tech-OP"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 768.0,
                    "id": "UMRW_OP_SOFTWARE_TL__1",
                    "intId": 300555,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-Software (TL)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMJ_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_PUBLIC_SITE_1",
                    "intId": 301226,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "Public-Site"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_SSE_1",
                    "displayOrder": 256.0,
                    "id": "UMRW_CWH_1",
                    "intId": 300504,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "CWH"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_RELEASE_1",
                    "displayOrder": 1024.0,
                    "id": "UMRW_DL_TOYOKAWA__1",
                    "intId": 48479,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DL(Toyokawa)"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMJ_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_IP_SUPPORT_1",
                    "intId": 300837,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "IP-Support"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 512.0,
                    "id": "UMRW_BES_1",
                    "intId": 300714,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BES"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_DWS_1",
                    "displayOrder": 128.0,
                    "id": "UMRW_DWS_ITS_1",
                    "intId": 48498,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "DWS-ITS"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_root",
                    "displayOrder": 128.0,
                    "id": "UMRW_BEU_1",
                    "intId": 300704,
                    "version": 1642718,
                    "countOfItems": 23,
                    "names": {
                        "LA_eng_US": "BEU"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_KMJ_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_PP_SUPPORT_1",
                    "intId": 300835,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "PP-Support"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_EXPERT_1",
                    "displayOrder": 640.0,
                    "id": "UMRW_OP_SOFTWARE_1",
                    "intId": 48493,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "OP-Software"
                    }
                },
                {
                    "taxonomyId": "UMRW_REVIEWGROUP",
                    "key": 0,
                    "parentId": "UMRW_BEU_1",
                    "displayOrder": 384.0,
                    "id": "UMRW_BCZ_1",
                    "intId": 300713,
                    "version": 1642718,
                    "countOfItems": 0,
                    "names": {
                        "LA_eng_US": "BCZ"
                    },
                    "attributes": [
                        {
                            "name": "description",
                            "value": "",
                            "isXml": false,
                            "language": "LA_eng_US"
                        },
                        {
                            "name": "browseImagePresent",
                            "value": "false",
                            "isXml": false
                        }
                    ]
                }
            ];
            setTreeData(buildTree(jsonData, "UMRW_root"));
        }, 1000);
    }, []);

    const buildTree = (data, parentId) => {
        return data
            .filter((item) => item.parentId === parentId)
            .map((item) => ({
                ...item,
                children: buildTree(data, item.id),
            })).sort((a, b) => a.names["LA_eng_US"].localeCompare(b.names["LA_eng_US"]));
    };

    const updateChildren = (node, checkedParam) => {
        if (Array.isArray(node.children) && node.children.length > 0) {
            node.children.forEach((c) => {
                checked[c.id] = checkedParam
                updateChildren(c, checkedParam);
            })
        }
    }

    const updateIndeterminate = (node) => {
        if (Array.isArray(node.children) && node.children.length > 0) {
            node.children.forEach((c) => {
                updateIndeterminate(c);
            })
            indeterminate[node.id] = node.children.some(p => isTrue(indeterminate[p.id])) || (!node.children.every(p => isTrue(checked[p.id])) && node.children.some(p => isTrue(checked[p.id])));
            checked[node.id] = node.children.every(p => isTrue(checked[p.id]));
        }
    }

    const isTrue = (value) => {
        return value === undefined ? false : value;
    }


    const renderTreeView = (nodes) => {
        return <>{
            nodes.map((node) => (
                <TreeItem key={node.id} nodeId={node.id}
                          label={<FormControlLabel
                              control={<Checkbox
                                  size={'small'}
                                  checked={isTrue(checked[node.id])}
                                  onChange={(event) => {
                                      checked[node.id] = event.target.checked;
                                      updateChildren(node, event.target.checked);
                                      treeData.forEach((t) => updateIndeterminate(t));
                                      setChecked({...checked});
                                      setIndeterminate({...indeterminate});
                                  }}
                                  indeterminate={isTrue(indeterminate[node.id])}
                                  onClick={(e) => e.stopPropagation()}
                              />}
                              label={node.names["LA_eng_US"]}
                              key={node.id}
                              onClick={(e) => e.preventDefault()}
                          />
                          }
                >
                    {Array.isArray(node.children) && node.children.length > 0
                        ? renderTreeView(node.children)
                        : null}
                </TreeItem>
            ))
        }</>
    }


    return <Paper variant="outlined" sx={{m: 1, p: 1}}>
        <Button onClick={() => {
            console.log("treeView =  " + JSON.stringify(checked))
        }}>Click</Button>
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon/>}
            defaultExpandIcon={<ChevronRightIcon/>}
            sx={{maxWidth: "400px", flexGrow: 1, overflowY: 'auto', overflowX: 'auto'}}>
            {renderTreeView(treeData)}</TreeView>
    </Paper>
}

export default TreeViewStorage;