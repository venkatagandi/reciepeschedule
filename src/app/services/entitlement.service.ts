import { Injectable } from '@angular/core';
import { ResourceActivityDaily } from '../model/resourceactvitydaily';

@Injectable()
export class EntitlementService {

  constructor() { }

  getEntitlementsData() {
   let resourcedailyActivityInfo:ResourceActivityDaily[]=[
      {
        resourcesid:'cnz445',
        fullname:'Victor Thomas',
        reportees:[],
        activityMap:[
          {
          'week1':[
            {
              '10/23/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/24/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/25/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/26/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/27/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week2':[
            {
              '10/30/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/31/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/01/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/02/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/03/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week3':[
            {
              '11/06/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/07/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/08/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/09/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/10/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week4':[
            {
              '11/13/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/14/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/15/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/16/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/17/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week5':[
            {
              '11/20/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/21/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/22/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/23/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/24/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week6':[
            {
              '11/27/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/28/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/29/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/30/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '12/01/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ]
        }
        ]
      },
      {
        resourcesid:'pnp118',
        fullname:'rachel dialamos',
        reportees:[],
        activityMap:[
          {
          'week1':[
            {
              '10/23/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/24/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/25/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/26/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/27/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week2':[
            {
              '10/30/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:2},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/31/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/01/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/02/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/03/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week3':[
            {
              '11/06/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/07/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/08/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/09/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/10/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week4':[
            {
              '11/13/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/14/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/15/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/16/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/17/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week5':[
            {
              '11/20/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/21/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/22/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/23/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/24/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week6':[
            {
              '11/27/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/28/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/29/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/30/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '12/01/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ]
        }
        ]
      },
      {
        resourcesid:'xzx228',
        fullname:'stone cold',
        reportees:[],
        activityMap:[
          {
          'week1':[
            {
              '10/23/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/24/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/25/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/26/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/27/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week2':[
            {
              '10/30/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '10/31/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/01/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/02/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/03/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week3':[
            {
              '11/06/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/07/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/08/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/09/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/10/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week4':[
            {
              '11/13/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/14/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/15/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/16/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/17/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week5':[
            {
              '11/20/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/21/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/22/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/23/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/24/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ],
          'week6':[
            {
              '11/27/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/28/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/29/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '11/30/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            },
            {
              '12/01/2017':[
                {activityid:1,activityname:'Activity Name1',individualresourcehoursforadate:2},
                {activityid:2,activityname:'Activity Name2',individualresourcehoursforadate:4},
                {activityid:3,activityname:'Activity Name3',individualresourcehoursforadate:2}
              ]
            }
          ]
        }
        ]
      }
    ];
    return resourcedailyActivityInfo;
  }

}
