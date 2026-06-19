'use client'
import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{padding:'40px', background:'#0a0000', color:'#fff', minHeight:'100vh', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <h1 style={{fontSize:'24px', color:'#c41e3a', marginBottom:'12px'}}>Something went wrong</h1>
          <pre style={{color:'rgba(255,255,255,0.6)', fontSize:'14px', maxWidth:'600px', whiteSpace:'pre-wrap'}}>
            {this.state.error?.message || 'Unknown error'}
          </pre>
          <p style={{color:'rgba(255,255,255,0.3)', marginTop:'20px', fontSize:'12px'}}>
            {this.state.error?.stack?.split('\n').slice(0, 5).join('\n')}
          </p>
        </div>
      )
    }
    return this.props.children
  }
}
