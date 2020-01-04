import React from 'react';
import Octokit from '@octokit/rest';

export const isAuthorised = () => !!localStorage.getItem("TOKEN");

export const setDefaultGlobalData = () => ({
  authorised: isAuthorised(),
  octokit: new Octokit(isAuthorised ? { auth: localStorage.getItem("TOKEN")! } : undefined),
  setOctokit: () => { },
})

export interface GlobalConsumerProps {
  authorised: boolean;
  /**
   * ref: https://octokit.github.io/rest.js
   */
  octokit: Octokit;
  setOctokit: (octokit: Octokit) => void;
}

export const GlobalContext = React.createContext<GlobalConsumerProps>({
  authorised: false,
  octokit: new Octokit(),
  setOctokit: () => { },
});

GlobalContext.displayName = 'Global ConfigContext';

export default GlobalContext;