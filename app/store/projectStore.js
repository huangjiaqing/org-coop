import { observable, action, runInAction } from 'mobx';
import { getProjects, getStages } from 'services/projectApi';

export default new class ProjectStore {

  @observable stages = []

  @action getStages = async (projectId) => {
    const res = await getStages(projectId);
    console.log(res);
    // runInAction(() => {
    //   this.stages = res.data;
    // });
  }
};