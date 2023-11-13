import React from 'react'
import { Anchor } from 'grommet'

import { Logo } from '../logo/Logo'
import { Button } from '../button/Button'
import { Typography } from '../typography/Typography'
import { Loader } from '../loader/Loader'
import arubaImage from '../../images/aruba.png'
import clearpassImage from '../../images/clearpass.png'

import { Tile } from './Tile'
import acmeImage from './acme.png'

export default {
  title: 'CCS/Tile',
  component: Tile
}

const Template = (args) => <Tile {...args} />

export const AccountList = Template.bind({})
AccountList.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="small"
      url={acmeImage}
      testId="account-logo"
    />
  ),
  title: (
    <Typography size="small" testId="tile-title" type="text" weight="bold">
      ACME
    </Typography>
  ),
  subTitle: (
    <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
      ACME Corporations
    </Typography>
  ),
  layout: 'row',
  boxShadow: true,
  testId: 'app-tile',
  onClickCard: null
}
export const AppList = Template.bind({})
AppList.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="small"
      url={arubaImage}
      testId="app-logo"
    />
  ),
  title: 'Aruba Network Manager',
  layout: 'column',
  testId: 'app-tile',
  onClickCard: null
}

export const AppListWithButton = Template.bind({})
AppListWithButton.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="small"
      url={arubaImage}
      testId="app-logo-btn"
    />
  ),
  title: 'Aruba Network Manager',
  layout: 'column',
  actionBtn: (
    <Button label="Remove" secondary type="button" testId="tile-action-btn" />
  ),
  testId: 'app-tile',
  onClickCard: null
}

export const CatalogList = Template.bind({})
CatalogList.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="small"
      url={arubaImage}
      testId="catalog-logo"
    />
  ),
  title: 'Aruba Network Manager',
  subTitle: 'Hewlett Packard Enterprise',
  layout: 'row',
  actionBtn: (
    <Button label="Add" primary type="button" testId="tile-action-btn" />
  ),
  testId: 'app-tile',
  onClickCard: null
}
export const CatalogListWithTerms = Template.bind({})
CatalogListWithTerms.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="small"
      url={arubaImage}
      testId="catalog-logo"
    />
  ),
  title: 'Aruba Network Manager',
  subTitle: 'Hewlett Packard Enterprise',
  refLink: (
    <Anchor
      href="https://design-system.hpe.design/components/anchor"
      label="App Terms"
      testId="terms-anchor"
      target="_blank"
      size="xsmall"
    />
  ),
  layout: 'row',
  actionBtn: (
    <Button label="Add" primary type="button" testId="tile-action-btn" />
  ),
  testId: 'app-tile-terms',
  onClickCard: null
}
export const CatalogDetail = Template.bind({})
CatalogDetail.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="large"
      url={clearpassImage}
      testId="catalog-detail-logo"
    />
  ),
  title: (
    <Typography level="2" type="heading" testId="tile-title">
      ClearPass Device Insight
    </Typography>
  ),
  subTitle: (
    <Typography color="gray" size="large" testId="tile-subtitle" type="text">
      Hewlett Packard Enterprise
    </Typography>
  ),
  layout: 'row',
  actionBtn: (
    <Button label="Add" primary type="button" testId="tile-action-btn" />
  ),
  testId: 'app-tile',
  onClickCard: null
}
export const CatalogDetailWithActionStatus = Template.bind({})
CatalogDetailWithActionStatus.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="medium"
      url={clearpassImage}
      testId="catlog-logo-action"
    />
  ),
  title: (
    <Typography size="small" testId="tile-title" type="text" weight="bold">
      ClearPass Device Insight
    </Typography>
  ),
  subTitle: (
    <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
      Hewlett Packard Enterprise
    </Typography>
  ),
  layout: 'row',
  actionBtn: (
    <Button label="Retry" secondary type="button" testId="tile-action-btn" />
  ),
  actionStatus: (
    <Anchor
      onClick={null}
      size="xsmall"
      data-testid="tile-action-status"
      label="Provision Failed"
    />
  ),
  testId: 'app-tile',
  onClickCard: null
}

export const CatalogDetailWithSpinnerIcon = Template.bind({})
CatalogDetailWithSpinnerIcon.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="medium"
      url={clearpassImage}
      testId="catlog-logo-action"
    />
  ),
  title: (
    <Typography size="small" testId="tile-title" type="text" weight="bold">
      ClearPass Device Insight
    </Typography>
  ),
  subTitle: (
    <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
      Hewlett Packard Enterprise
    </Typography>
  ),
  layout: 'row',
  actionBtn: <Loader testId="loader-spinner" label="Provisioning..." />,
  actionStatus: null,
  testId: 'app-tile',
  onClickCard: null
}

export const ClickableAccountListCard = Template.bind({})
ClickableAccountListCard.args = {
  logo: (
    <Logo
      onClick={null}
      param={null}
      size="small"
      url="/images/acme.png"
      testId="account-logo"
    />
  ),
  title: (
    <Typography size="small" testId="tile-title" type="text" weight="bold">
      ACME
    </Typography>
  ),
  subTitle: (
    <Typography color="gray" size="xsmall" testId="tile-subtitle" type="text">
      ACME Corporations
    </Typography>
  ),
  layout: 'row',
  boxShadow: true,
  testId: 'app-tile'
}
