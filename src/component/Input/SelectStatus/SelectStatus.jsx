import React from 'react'
import { translate } from 'react-i18next'
import i18n from '../../../i18n.js'

require('./SelectStatus.styl')

export const SelectStatus = props => {
  translate.setI18n(props.i18n ? props.i18n : i18n) // mandatory to allow Apps to overrides trad

  return (
    <div className='selectStatus dropdown'>
      <button
        className='selectStatus__dropdownbtn check btn dropdown-toggle'
        type='button'
        id='dropdownMenu2'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        {props.t('Input.SelectStatus.validated')}
        <div className='selectStatus__dropdownbtn__icon'>
          <i className='fa fa-check' />
        </div>
      </button>

      <div className='selectStatus__submenu dropdown-menu' aria-labelledby='dropdownMenu2'>
        <h6 className='dropdown-header'>{props.t('Input.SelectStatus.file_status')}</h6>

        <div className='dropdown-divider' />

        <button className='selectStatus__submenu__item current  dropdown-item' type='button'>
          {props.t('Input.SelectStatus.ongoing')}
          <div className='selectStatus__submenu__item__icon'>
            <i className='fa fa-gears' />
          </div>
        </button>

        <button className='selectStatus__submenu__item check dropdown-item' type='button'>
          {props.t('Input.SelectStatus.validated')}
          <div className='selectStatus__submenu__item__icon'>
            <i className='fa fa-check' />
          </div>
        </button>

        <button className='selectStatus__submenu__item invalid dropdown-item' type='button'>
          {props.t('Input.SelectStatus.unvalidated')}
          <div className='selectStatus__submenu__item__icon'>
            <i className='fa fa-times' />
          </div>
        </button>

        <button className='selectStatus__submenu__item ban dropdown-item' type='button'>
          {props.t('Input.SelectStatus.obsolete')}
          <div className='selectStatus__submenu__item__icon'>
            <i className='fa fa-ban' />
          </div>
        </button>
      </div>
    </div>
  )
}

export default translate()(SelectStatus)
